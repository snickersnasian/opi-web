// @ts-nocheck
import Router from "express";
import { FileUploadStatus } from "../../middlewares/upload/constants.js";
import { checkPDF } from "./helpers/checkPDF.js";
import multer from "multer";
import { Image } from "../../db/db.js";
import fs from "fs";
import { promisify } from "util";
import path from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";
import { getTotalPages } from "./helpers/getTotalPages.js";
import { nanoid } from "nanoid";
import { getScheduleFiles } from "../../db/queries/getScheduleFiles.js";
import { createSchedule } from "../../db/queries/createSchedule.js";
import { getScheduleImages } from "../../db/queries/getScheduleImages.js";
import { PDF_PATH, PNG_PATH } from "./constants.js";
import { checkAuth } from "../../middlewares/auth/checkAuth.js";
import { getScheduleRecord } from "../../db/queries/getScheduleRecord.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// /api/schedule/upload
router.post("/upload", checkAuth, multer().single("schedule"), async (req, res) => {
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


		const file = await createSchedule(scheduleFile.originalname, studyYear, title);

		const convertedImgName = nanoid();

		const pdfPath = path.join(__dirname, PDF_PATH, scheduleFile.originalname);
		const imagePath = path.join(__dirname, PNG_PATH, convertedImgName);
		await promisify(fs.writeFile)(pdfPath, scheduleFile.buffer);

		const command = `pdftoppm "${pdfPath}" "${imagePath}" -png`;
		await exec(command);

		const totalPages = await getTotalPages(pdfPath);

		const images = [];
		for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
			images.push({
				fileName: `${convertedImgName}-${pageNum}.png`,
				FileId: file.get("id"),
			});
		}
		await Image.bulkCreate(images);

		console.log(images);

		return res.json({ message: FileUploadStatus.SUCCESS });
	} catch (err) {
		console.error(FileUploadStatus.ERROR, err);
		res.status(500).json({ error: FileUploadStatus.ERROR });
	}
});

// /api/schedule/delete/:fileId
router.get("/delete/:scheduleId", checkAuth, async (req, res) => {
	try {
		const scheduleId = req.params.scheduleId;

		const file = await getScheduleRecord(scheduleId);

		if (!file) {
			return res.status(404).json({ error: "Файл не найден" });
		}

		await Image.destroy({ where: { FileId: scheduleId } });

		const filename = file.get("name") || "";
		const images = file.get("Images") || [];

		const pdfPath = path.join(__dirname, PDF_PATH, String(filename));
		const imageDir = path.join(__dirname, PNG_PATH);
		const imagesToDelete = images.map((image) => path.join(imageDir, image.fileName));

		fs.unlinkSync(pdfPath);
		imagesToDelete.forEach((imagePath) => fs.unlinkSync(imagePath));

		await file.destroy();

		res.json({ message: "Запись удалена успешно" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: "Ошибка при удалении записи" });
	}
});

// /api/schedule
router.get("/", async (req, res) => {
	try {
		const lastScheduleFiles = await getScheduleFiles();

		res.json({ lastScheduleFiles });
	} catch (err) {
		res.status(500).json({ error: "Ошибка при получении расписаний" });
	}
});

// /api/schedule/[image]
router.get("/:image", async (req, res) => {
	res.sendFile(path.join(__dirname, "tmp/", "png/", req.params.image));
});

// /api/schedule/images/[fileId]
router.get("/images/:fileId", async (req, res) => {
	try {
		const fileId = req.params.fileId;

		const images = await getScheduleImages(fileId);

		res.json({ images });
	} catch (err) {
		res.status(500).json({ error: "Ошибка при получении изображений" });
	}
});

export const scheduleRoutes = router;
