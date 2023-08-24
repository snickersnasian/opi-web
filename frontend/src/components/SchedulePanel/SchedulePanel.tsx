import React, { type ReactElement } from 'react';
import styles from './FileSummary.module.scss';
import { FileSummaryProps } from './types';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import PdfIcon from '../../assets/icons/PdfIcon.svg';
import { Typo } from 'src/lib/Typo/Typo';

export const FileSummary = ({ title, url }: FileSummaryProps): ReactElement => {
	return (
		<a href={url}>
			<div className={styles.wrapper}>
				<InfoPanel>
					<div className={styles.panel}>
						<div className={styles.icon}>
							<img src={PdfIcon} />
						</div>
						<div className={`${styles.title} ${Typo.TEXT_M}`}>{title}</div>
					</div>
				</InfoPanel>
			</div>
		</a>
	);
};
