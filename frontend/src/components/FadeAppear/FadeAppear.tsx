import React, { PropsWithChildren, type ReactElement } from 'react';
import styles from './FadeAppear.module.scss';

export const FadeAppear = ({ children }: PropsWithChildren): ReactElement => {
	return <div className={styles.container}>{children}</div>;
};
