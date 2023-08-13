import Pegasova from './images/Pagasova.png';

export const contactPerson: ContactPerson = {
	image: Pegasova,
	name: 'Пегасова Лидия Викторовна',
	role: 'Заведующая отделением прикладной информатики, кандидат экономических наук',
	mail: 'pegasova@ranepa.ru',
	phone: '+7 495 937 02 85',
};

export type ContactPerson = {
	image?: string;
	name: string;
	role?: string;
	mail?: string;
	phone?: string;
};
