import { Image } from "../db.js";

export const getScheduleImages = async (fileId) => {
	return await Image.findAll({
		where: { FileId: fileId },
		attributes: ["fileName"],
	});
};
