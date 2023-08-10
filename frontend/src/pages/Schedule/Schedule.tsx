import React, { useEffect, type ReactElement, useState } from 'react';
import styles from './Schedule.module.scss';
import { InfoPanel } from 'src/components/InfoPanel/InfoPanel';
import { FileSummary } from 'src/components/FileSummary/FileSummary';
import { getSchedule } from 'src/api/getSchedule/getSchedule';
import { ScheduleFile } from './types';
import { Modal } from 'src/components/Modal/Modal';
import { ScheduleFileSummary } from 'src/components/ScheduleFileSummary/ScheduleFileSummary';

export const Schedule = (): ReactElement => {
	const [schedules, setSchedules] = useState<Record<string, ScheduleFile[]>>(
		{}
	);

	const studyYears = Object.keys(schedules);

	useEffect(() => {
		async function fetchSchedule() {
			const res = await getSchedule();
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
