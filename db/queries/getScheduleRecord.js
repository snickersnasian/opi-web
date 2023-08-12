import { ScheduleFile } from '../db.js';

export const getScheduleRecord = async (scheduleId) => {
	return await ScheduleFile.findByPk(scheduleId);
};
