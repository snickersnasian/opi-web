import React, { PropsWithChildren, type ReactElement } from 'react';
import { type ButtonProps } from './types';
import styles from './Button.module.scss';

export const Button = ({
	onClick,
	children,
}: PropsWithChildren<ButtonProps>): ReactElement => {
	return (
		<div onClick={onClick} className={styles.piBtn}>
			<button>{children}</button>
		</div>
	);
};
