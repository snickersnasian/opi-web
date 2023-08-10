import { AppRoutes, RoutesUrl } from '../constants';

export const getRouteUrl = (route: AppRoutes): string => {
	return RoutesUrl[route];
};
