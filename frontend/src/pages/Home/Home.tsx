import React, { type ReactElement } from 'react';
import styles from './Home.module.scss';
import { ImageBanner } from 'src/components/ImageBanner/ImageBanner';
import HomePageBanner from '../../assets/images/HomaPageBanner.svg';
import { InfoPanel } from 'src/components/InfoPanel/InfoPanel';

export const Home = (): ReactElement => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<ImageBanner src={HomePageBanner} />
				<div className={styles.islandsContainer}>
					<div className={styles.islandsGroup}>
						<InfoPanel
							title="Отделение Прикладной Информатики"
							text="Отделение прикладной информатики ведет подготовку востребованных на рынке труда кадров и занимает устойчивую нишу в области подготовки специалистов для ИТ-сферы. Выпускники отделения — это специалисты по информационным системам и информационным ресурсам, системные аналитики, разработчики бизнес-приложений. Они способны работать как в ИТ компаниях, разрабатывающих программные комплексы, так и в организациях, внедряющих и эксплуатирующих информационно-коммуникационные технологии."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
