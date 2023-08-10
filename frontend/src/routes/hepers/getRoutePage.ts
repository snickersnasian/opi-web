import { ReactElement } from "react"
import { AppRoutes, RoutesPage } from "../constants"

export const getRoutePage = (route: AppRoutes): ReactElement => {
    return RoutesPage[route]()
}