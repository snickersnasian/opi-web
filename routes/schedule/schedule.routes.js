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
import { getScheduleRecord } from '../../db/queries/getScheduleRecord.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

		const { studyYear } = req.body;
		const { title } = req.body;

		await createSchedule(scheduleFile.originalname, studyYear, title);

		return res.json({ message: FileUploadStatus.SUCCESS });
	} catch (err) {
		console.error(FileUploadStatus.ERROR, err);
		res.status(500).json({ error: FileUploadStatus.ERROR });
	}
});

// /api/schedule/delete/:fileId

// /api/schedule
router.get('/', async (req, res) => {
	try {
		const lastScheduleFiles = await getScheduleFiles();

		res.json({ lastScheduleFiles });
	} catch (err) {
		res.status(500).json({ error: 'Ошибка при получении расписаний' });
	}
});

// /api/schedule/[fileId]
router.get('/:fileId', async (req, res) => {
	try {
		const fileId = req.params.fileId;

		const scheduleFile = await getScheduleRecord(fileId);

		res.sendFile(path.join(__dirname, PDF_PATH, scheduleFile.name));
	} catch (err) {
		res.status(500).json({ error: 'Ошибка при получении расписаний' });
	}
});

// /api/schedule/image/[image]
router.get('/image/:image', async (req, res) => {
	res.sendFile(path.join(__dirname, PNG_PATH, req.params.image));
});

export const scheduleRoutes = router;
