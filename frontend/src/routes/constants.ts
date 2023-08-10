import { Home } from 'src/pages/Home/Home';
import { Schedule } from 'src/pages/Schedule/Schedule';

export enum AppRoutes {
	HOME = 'HOME',
	SCHEDULE = 'SCHEDULE',
}

export const RoutesUrl = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.SCHEDULE]: '/schedule',
};

export const RoutesDescription = {
	[AppRoutes.HOME]: 'Главная',
	[AppRoutes.SCHEDULE]: 'Расписание',
};

export const RoutesPage = {
	[AppRoutes.HOME]: Home,
	[AppRoutes.SCHEDULE]: Schedule,
};
