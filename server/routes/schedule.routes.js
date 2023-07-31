import Router from "express";
import { upload } from "../upload/upload.js";
import { FileUploadStatus } from "../upload/constants.js";
const router = Router();

// /api/schedule/upload
router.post("/upload", upload.single("schedule"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: FileUploadStatus.FAIL });
    }

    const { originalname, filename } = req.file;

    console.log(originalname, filename);

    res.json({ message: FileUploadStatus.SUCCESS });
  } catch (err) {
    console.error(FileUploadStatus.ERROR, err);
    res.status(500).json({ error: FileUploadStatus.ERROR });
  }
});

export const scheduleRoutes = router;
