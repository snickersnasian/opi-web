import React, { type ReactElement } from 'react';
import styles from './FileSummary.module.scss';
import { FileSummaryProps } from './types';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import PdfIcon from '../../assets/icons/PdfIcon.svg';

export const FileSummary = ({ title, url, onClick }: FileSummaryProps): ReactElement => {
	return (
		<a href={url} onClick={onClick}>
			<div className={styles.wrapper}>
				<InfoPanel>
					<div className={styles.panel}>
						<div className={styles.icon}>
							<img src={PdfIcon} />
						</div>
						<div className={styles.title}>{title}</div>
					</div>
				</InfoPanel>
			</div>
		</a>
	);
};
