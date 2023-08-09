import React, { type ReactElement } from 'react';
import styles from './Home.module.scss'
import { IslandPanel } from 'src/components/IslandPanel/IslandPanel';
import { Button } from 'src/components/Button/Button';

export const Home = (): ReactElement => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.islandsContainer}>
					<IslandPanel>
						<Button text="Кнопка" onClick={() => alert('Нажатие на кнопку')} />
					</IslandPanel>
					<IslandPanel>
						<Button
							text="Другая кнопка"
							onClick={() => alert('Нажатие на другую кнопку')}
						/>
					</IslandPanel>
				</div>
			</div>
		</div>
	);
};
