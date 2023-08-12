import { ScheduleFile } from '../db.js';

export const createSchedule = async (fileName, studyYear, title) => {
	return await ScheduleFile.create({
		name: fileName,
		studyYear,
		title,
	});
};
