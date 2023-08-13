import React from 'react';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import { ContactsPanelProps } from './types';
import styles from './ContactsPanel.module.scss';
import { Typo } from 'src/lib/Typo/Typo';

export const ContactsPanel = ({ contacts }: ContactsPanelProps) => {
	return (
		<InfoPanel title="Контакты">
			<div className={styles.panelChildren}>
				{contacts.map(({ name, phone, email }, index) => (
					<InfoPanel key={index}>
						<div className={styles.contactsInfo}>
							<div className={Typo.TITLE_S_BOLD}>{name}</div>
							<div className={styles.contactsData}>
								{phone &&
									phone.map((item, index) => (
										<div key={index} className={Typo.TEXT_M_BOLD}>
											{item}
										</div>
									))}
							</div>
							<div className={styles.contactsData}>
								{email &&
									email.map((item, index) => (
										<div key={index} className={Typo.TEXT_M_BOLD}>
											{item}
										</div>
									))}
							</div>
						</div>
					</InfoPanel>
				))}
			</div>
		</InfoPanel>
	);
};
