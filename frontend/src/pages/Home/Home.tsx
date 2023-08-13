import React, { type ReactElement } from 'react';
import styles from './Home.module.scss';
import { IslandPanel } from 'src/components/IslandPanel/IslandPanel';
import { Button } from 'src/components/Button/Button';
import { ImageBanner } from 'src/components/ImageBanner/ImageBanner';
import HomePageBanner from '../../assets/images/HomaPageBanner.svg';
import { InfoPanel } from 'src/components/InfoPanel/InfoPanel';
import { ContactsPanel } from 'src/components/ContactsPanel/ContactsPanel';
import { contacts } from 'src/info/contacts/contacts';
import { PersonContactsPanel } from 'src/components/PersonContactsPanel/PersonContactsPanel';
import { contactPerson } from 'src/info/contactPerson/contactPerson';

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
						<PersonContactsPanel person={contactPerson} />
						<ContactsPanel contacts={contacts} />
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
