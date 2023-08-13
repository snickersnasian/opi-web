import React from 'react';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import { PersonContactsPanelProps } from './types';
import styles from './PersonContactsPanel.module.scss';
import Mail from '../../assets/icons/Mail.svg';
import Phone from '../../assets/icons/Phone.svg';
import { Typo } from 'src/lib/Typo/Typo';

export const PersonContactsPanel = ({ person }: PersonContactsPanelProps) => {
	const { image, name, role, mail, phone } = person;
	return (
		<InfoPanel>
			<div className={styles.panelChildren}>
				<div className={styles.avatar}>
					<img src={image} alt="" />
				</div>

				<div className={styles.info}>
					<div className={`${Typo.TITLE_M_BOLD} ${styles.title}`}>{name}</div>
					<div className={`${Typo.TEXT_M} ${styles.role}`}>{role}</div>
					<div className={styles.contacts}>
						{mail && (
							<div className={styles.phone}>
								<img src={Mail} alt="" />
								<div>{mail}</div>
							</div>
						)}
						{phone && (
							<div className={styles.phone}>
								<img src={Phone} alt="" />
								<div>{phone}</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</InfoPanel>
	);
};
