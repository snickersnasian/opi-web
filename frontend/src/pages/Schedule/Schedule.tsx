import React, { useEffect, type ReactElement, useState } from 'react';
import styles from './Schedule.module.scss';
import { InfoPanel } from 'src/components/InfoPanel/InfoPanel';
import { FileSummary } from 'src/components/FileSummary/FileSummary';
import { getSchedule } from 'src/api/getSchedule/getSchedule';
import { ScheduleFile } from './types';
import { Modal } from 'src/components/Modal/Modal';

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
			<Modal onOutsideClick={() => console.log('onOutsideClick')} />
			<div className={styles.content}>
				<div className={styles.islandsGroup}>
					{studyYears.map((studyYear, index) => {
						return (
							<InfoPanel key={index} title={`${studyYear} курс`}>
								{schedules[studyYear].map((schedule, index) => {
									return (
										<FileSummary
											key={index}
											url={`/file/${schedule.id}`}
											title={schedule.title || schedule.name}
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
