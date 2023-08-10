import React, { PropsWithChildren, type ReactElement } from 'react';
import styles from './InfoPanel.module.scss';
import { InfoPanelProps } from './types';
import { Typo } from 'src/lib/Typo/Typo';
import { IslandPanel } from '../IslandPanel/IslandPanel';

export const InfoPanel = ({ title, text, children }: PropsWithChildren<InfoPanelProps>): ReactElement => {
	return (
		<IslandPanel>
			<div className={styles.panel}>
				{title && <div className={Typo.TITLE_M_BOLD}>{title}</div>}
				{text && <div className={Typo.TEXT_M}>{text}</div>}
				{children}
			</div>
		</IslandPanel>
	);
};
