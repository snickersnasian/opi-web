// @ts-nocheck
import Router from 'express';
import { FileUploadStatus } from '../../middlewares/upload/constants.js';
import { checkPDF } from './helpers/checkPDF.js';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { getScheduleFiles } from '../../db/queries/getScheduleFiles.js';
import { createSchedule } from '../../db/queries/createSchedule.js';
import { PDF_PATH, PNG_PATH } from './constants.js';
import { checkAuth } from '../../middlewares/auth/checkAuth.js';
import fs from 'fs';
import { promisify } from 'util';
import { nanoid } from 'nanoid';
import { getScheduleRecordByGroupCode } from '../../db/queries/getScheduleFileByStudyGroup.js';
import { updateScheduleRecordByGroupCode } from '../../db/queries/updateScheduleRecordByStudyGroup.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PDF_FILE_EXTENSION = 'pdf';

const router = Router();

// /api/schedule/upload
router.post('/upload', checkAuth, multer().single('schedule'), async (req, res) => {
	try {
		const { file: scheduleFile } = req;
		if (!scheduleFile) {
			return res.status(400).json({ error: FileUploadStatus.FAIL });
		}

		if (!checkPDF(scheduleFile.originalname)) {
			return res.status(400).json({ error: FileUploadStatus.NOT_PDF });
		}

		const { studyYear, groupCode, title } = req.body;

		const fileName = `${nanoid()}.${PDF_FILE_EXTENSION}`;

		const pdfPath = path.join(__dirname, PDF_PATH, fileName);

		await promisify(fs.writeFile)(pdfPath, scheduleFile.buffer);

		const oldFileName = await updateScheduleRecordByGroupCode(groupCode, fileName);

		if (oldFileName) {
			const oldFile = path.join(__dirname, PDF_PATH, String(oldFileName));
			fs.unlinkSync(oldFile);

			return res.json({ message: FileUploadStatus.UPDATED });
		}

		await createSchedule(fileName, studyYear, title, groupCode.toLowerCase());

		return res.json({ message: FileUploadStatus.SUCCESS });
	} catch (err) {
		console.error(FileUploadStatus.ERROR, err);
		res.status(500).json({ error: FileUploadStatus.ERROR });
	}
});

// /api/schedule/delete/:groupCode
router.get('/delete/:groupCode', checkAuth, async (req, res) => {
	try {
		const groupCode = req.params.groupCode;

		const file = await getScheduleRecordByGroupCode(groupCode);

		if (!file) {
			return res.status(404).json({ error: 'Файл не найден' });
		}

		const filename = file.get('name') || '';

		const pdfPath = path.join(__dirname, PDF_PATH, String(filename));

		fs.unlinkSync(pdfPath);

		await file.destroy();

		res.json({ message: 'Запись удалена успешно' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'Ошибка при удалении записи' });
	}
});

// /api/schedule
router.get('/', async (req, res) => {
	try {
		const lastScheduleFiles = await getScheduleFiles();

		res.json({ lastScheduleFiles });
	} catch (err) {
		res.status(500).json({ error: 'Ошибка при получении расписаний' });
	}
});

// /api/schedule/:groupCode
router.get('/:groupCode', async (req, res) => {
	try {
		const { groupCode } = req.params;

		const scheduleFile = await getScheduleRecordByGroupCode(groupCode);

		res.sendFile(path.join(__dirname, PDF_PATH, scheduleFile.name));
	} catch (err) {
		res.status(500).json({ error: 'Ошибка при получении расписаний' });
	}
});

// /api/schedule/image/:image
router.get('/image/:image', async (req, res) => {
	res.sendFile(path.join(__dirname, PNG_PATH, req.params.image));
});

export const scheduleRoutes = router;
