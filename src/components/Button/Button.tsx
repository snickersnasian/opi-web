import React, { type ReactElement } from 'react';
import { type ButtonProps } from './types';
import styles from './Button.module.scss';

export const Button = ({ onClick, text }: ButtonProps): ReactElement => {
	return (
		<div onClick={onClick} className={styles.piBtn}>
			<button>{text}</button>
		</div>
	);
};
