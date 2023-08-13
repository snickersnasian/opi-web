import React, { type ReactElement } from 'react';
import styles from './FileSummary.module.scss';
import { FileSummaryProps } from './types';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import PdfIcon from '../../assets/icons/PdfIcon.svg';
import { useNavigate } from 'react-router-dom';

export const FileSummary = ({
	title,
	url = '',
	onClick,
}: FileSummaryProps): ReactElement => {
	const navigate = useNavigate();

	function handleClick() {
		if (onClick) {
			return onClick();
		}
		navigate(url);
	}

	return (
		<div className={styles.wrapper} onClick={handleClick}>
			<InfoPanel>
				<div className={styles.panel}>
					<div className={styles.icon}>
						<img src={PdfIcon} />
					</div>
					<div className={styles.title}>{title}</div>
				</div>
			</InfoPanel>
		</div>
	);
};
