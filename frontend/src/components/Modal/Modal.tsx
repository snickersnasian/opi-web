import React, { PropsWithChildren, type ReactElement } from 'react';
import styles from './Modal.module.scss';
import { ModalProps } from './types';

export const Modal = ({
	children,
	onOutsideClick,
}: PropsWithChildren<ModalProps>): ReactElement => {
	return (
		<div className={styles.background} onClick={onOutsideClick}>
			<div
				onClick={(event) => event.stopPropagation()}
				className={styles.panel}
			>
				{children}
			</div>
		</div>
	);
};
