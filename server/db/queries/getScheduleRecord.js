import { Sequelize } from "sequelize";
import { Image, ScheduleFile } from "../db.js";

export const getScheduleRecord = async (scheduleId) => {
	return await ScheduleFile.findByPk(scheduleId, {
		include: [Image],
	});
};
