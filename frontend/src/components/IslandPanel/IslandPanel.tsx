import React, { PropsWithChildren, type ReactElement } from 'react';
import styles from './IslandPanel.module.scss';

export const IslandPanel = ({ children }: PropsWithChildren): ReactElement => {
	return <div className={styles.panel}>{children}</div>;
};
