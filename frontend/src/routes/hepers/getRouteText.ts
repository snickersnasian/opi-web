import { AppRoutes, RoutesDescription } from "../constants"

export const getRouteText = (route: AppRoutes): string => {
    return RoutesDescription[route]
}