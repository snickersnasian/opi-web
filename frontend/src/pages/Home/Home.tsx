import React, { type ReactElement } from 'react';
import styles from './Home.module.scss';
import { IslandPanel } from 'src/components/IslandPanel/IslandPanel';
import { Button } from 'src/components/Button/Button';
import { ImageBanner } from 'src/components/ImageBanner/ImageBanner';
import HomePageBanner from '../../assets/images/HomaPageBanner.svg';
import { InfoPanel } from 'src/components/InfoPanel/InfoPanel';
import { Typo } from 'src/lib/Typo/Typo';

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
						<InfoPanel title="Контакты">
							<div className={styles.panelChildren}>
								<InfoPanel>
									<div className={Typo.TITLE_S_BOLD}>
										Гусейнова Лейла Арзуевна
									</div>
								</InfoPanel>

								<InfoPanel>
									<div className={Typo.TITLE_S_BOLD}>
										Гусейнова Лейла Арзуевна
									</div>
								</InfoPanel>

								<InfoPanel>
									<div className={Typo.TITLE_S_BOLD}>
										Гусейнова Лейла Арзуевна
									</div>
								</InfoPanel>
							</div>
						</InfoPanel>
					</div>
					<div className={styles.islandsGroup}>
						<IslandPanel>
							<Button onClick={() => alert('Нажатие на кнопку')}>Кнопка</Button>
						</IslandPanel>
						<IslandPanel>
							<Button onClick={() => alert('Нажатие на другую кнопку')}>
								Другая кнопка
							</Button>
						</IslandPanel>
					</div>
				</div>
			</div>
		</div>
	);
};
