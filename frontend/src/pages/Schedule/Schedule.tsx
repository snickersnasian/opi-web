import React, { useEffect, type ReactElement, useState } from 'react';
import styles from './Schedule.module.scss';
import { InfoPanel } from 'src/components/InfoPanel/InfoPanel';
import { getSchedule } from 'src/api/getSchedule/getSchedule';
import { ScheduleFile } from './types';
import { ScheduleFileSummary } from 'src/components/ScheduleFileSummary/ScheduleFileSummary';

export const Schedule = (): ReactElement => {
	const [schedules, setSchedules] = useState<Record<string, ScheduleFile[]>>(
		{}
	);
	const [isLoading, setIsLoading] = useState(false);

	const studyYears = Object.keys(schedules);

	useEffect(() => {
		async function fetchSchedule() {
			setIsLoading(true);
			const res = await getSchedule();
			setIsLoading(false);
			setSchedules(res);
		}

		fetchSchedule();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.islandsGroup}>
					{studyYears.map((studyYear, index) => {
						return (
							<InfoPanel key={index} title={`${studyYear} курс`}>
								{schedules[studyYear].map((schedule, index) => {
									return (
										<ScheduleFileSummary
											key={index}
											uploadedAt={schedule.createdAt}
											title={schedule.title || schedule.name}
											scheduleId={String(schedule.id)}
										/>
									);
								})}
							</InfoPanel>
						);
					})}
				</div>
			</div>
		</div>
	);
};
