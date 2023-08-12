import React, { type ReactElement } from 'react';
import styles from './NotFound.module.scss';
import Bot from '../../assets/icons/Bot.svg';
import { Typo } from 'src/lib/Typo/Typo';

export const NotFound = (): ReactElement => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<img src={Bot} alt="" />
				<div className={styles.description}>
					<div className={Typo.TITLE_L_BOLD}>Такой страницы еще нет</div>
					<a href="/" className={Typo.TITLE_S_BOLD}>
						на Главную
					</a>
				</div>
			</div>
		</div>
	);
};
