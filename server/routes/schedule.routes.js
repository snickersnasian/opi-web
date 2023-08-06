import Router from "express";
import { FileUploadStatus } from "../middlewares/upload/constants.js";
import { checkPDF } from "../helpers/checkPDF.js";
import multer from "multer";
import { Image, ScheduleFile } from "../db/db.js";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";
import { getTotalPages } from "../helpers/getTotalPages.js";
import { nanoid } from "nanoid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// /api/schedule/upload
router.post("/upload", multer().single("schedule"), async (req, res) => {
	try {
		const { file: scheduleFile } = req;
		if (!scheduleFile) {
			return res.status(400).json({ error: FileUploadStatus.FAIL });
		}

		if (!checkPDF(scheduleFile.originalname)) {
			return res.status(400).json({ error: FileUploadStatus.NOT_PDF });
		}

		const { studyYear } = req.body;

		const file = await ScheduleFile.create({
			name: scheduleFile.originalname,
			studyYear,
		});

		const convertedImgName = nanoid()

		const pdfPath = path.join(__dirname, "tmp/", "pdf", scheduleFile.originalname);
		await promisify(fs.writeFile)(pdfPath, scheduleFile.buffer);

		const imagePath = path.join(
			__dirname,
			"tmp/",
			"png",
			convertedImgName,
		);

		const command = `pdftoppm "${pdfPath}" "${imagePath}" -png`;
		await exec(command);

		const totalPages = await getTotalPages(pdfPath);

		const images = [];
		for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
			images.push({ fileName: `${convertedImgName}-${pageNum}.png`, FileId: file.get("id") });
		}
		await Image.bulkCreate(images);

		return res.json({ message: FileUploadStatus.SUCCESS });
	} catch (err) {
		console.error(FileUploadStatus.ERROR, err);
		res.status(500).json({ error: FileUploadStatus.ERROR });
	}
});

export const scheduleRoutes = router;
