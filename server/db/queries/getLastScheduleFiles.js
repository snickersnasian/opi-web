import { Sequelize } from "sequelize";
import { ScheduleFile } from "../db.js";

export const getLastScheduleFiles = async () => {
	return await ScheduleFile.findAll({
		attributes: [
			"id",
			"studyYear",
			[Sequelize.fn("MAX", Sequelize.col("createdAt")), "createdAt"],
		],
		group: ["studyYear"],
	});
};
