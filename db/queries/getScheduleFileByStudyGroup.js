import { ScheduleFile } from '../db.js';

export const getScheduleRecordByGroupCode = async (groupCode) => {
	return await ScheduleFile.findOne({
		where: {
			groupCode: groupCode.toLowerCase(),
		},
	});
};
