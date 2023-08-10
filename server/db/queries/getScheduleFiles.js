import { Sequelize } from "sequelize";
import { ScheduleFile } from "../db.js";

export const getScheduleFiles = async () => {
	return await ScheduleFile.findAll();
};
