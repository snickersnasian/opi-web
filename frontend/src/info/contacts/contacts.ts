export const contacts: Contact[] = [
	{
		name: 'Гусейнова Лейла Арзуевна',
		phone: ['+7 495 937 02 85'],
		email: ['lila@ranepa.ru'],
	},
	{
		name: 'Пегасова Лидия Викторовна',
		phone: ['+7 495 937 02 85'],
		email: ['pegasova@ranepa.ru'],
	},
	{
		name: 'Телефоны приемной комиссии',
		phone: ['+7 991 594 77 93', '+7 991 594 77 96', '+7 991 594 77 96'],
	},
];

export type Contact = {
	name: string;
	phone?: string[];
	email?: string[];
};
