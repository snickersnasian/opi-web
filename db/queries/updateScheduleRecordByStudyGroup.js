import { ScheduleFile } from '../db.js';

export const updateScheduleRecordByGroupCode = async (groupCode, fileName) => {
	const scheduleRecord = await ScheduleFile.findOne({
		where: {
			groupCode: groupCode,
		},
	});

	if (!scheduleRecord) {
		return null;
	}

	const oldFileName = scheduleRecord.dataValues.name;

	await scheduleRecord.update({
		name: fileName,
	});

	return oldFileName;
};
