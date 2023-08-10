import { ScheduleFile } from 'src/pages/Schedule/types';

export const mapSchedule = (
	schedule: ScheduleFile[]
): Record<string, ScheduleFile[]> => {
	const schedules: Record<string, ScheduleFile[]> = {};

	schedule.forEach((scheduleFile: ScheduleFile) => {
		const { studyYear } = scheduleFile;

		if (!schedules[studyYear]) {
			schedules[studyYear] = [];
			schedules[studyYear].push(scheduleFile);
		} else {
			schedules[studyYear].push(scheduleFile);
		}
	});

	return schedules;
};
