import { Sequelize } from "sequelize";
import { ScheduleFile } from "../db.js";

export const createSchedule = async (fileName, studyYear) => {
	return await ScheduleFile.create({
		name: fileName,
		studyYear,
	});
};
