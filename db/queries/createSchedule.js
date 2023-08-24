import { ScheduleFile } from '../db.js';

export const createSchedule = async (fileName, studyYear, title, groupCode) => {
	return await ScheduleFile.create({
		name: fileName,
		studyYear,
		title,
		groupCode,
	});
};
