import type { ScheduleFile } from '../../pages/Schedule/types';
import { mapSchedule } from './mappers/mapSchedule';

export const getSchedule = async (): Promise<
	Record<string, ScheduleFile[]>
> => {
	const result = await fetch('/api/schedule');
	const jsonBody = await result.json();
	const { lastScheduleFiles } = jsonBody;

	const schedules = mapSchedule(lastScheduleFiles);

	return schedules;
};
