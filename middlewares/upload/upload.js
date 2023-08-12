import { nanoid } from "nanoid";
import { fileURLToPath } from "url";
import multer from "multer";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, "/uploads/"));
	},

	filename: (req, file, cb) => {
		cb(null, nanoid() + path.extname(file.originalname));
	},
});

export const upload = multer({
	storage,
	fileFilter: (req, file, cb) => {
		const allowedMimes = ["application/pdf"];

		if (allowedMimes.includes(file.mimetype)) {
			cb(null, true);
		} else {
			cb(null, false);
		}
	},
});
