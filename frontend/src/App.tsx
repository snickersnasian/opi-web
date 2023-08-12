import React, { ReactElement } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './routes/constants';
import { getRouteUrl } from './routes/hepers/getRouteUrl';
import { getRoutePage } from './routes/hepers/getRoutePage';
import { FadeAppear } from './components/FadeAppear/FadeAppear';
import { NotFound } from './pages/NotFound/NotFound';

function App(): ReactElement {
	const appRoutes = Object.values(AppRoutes);
	return (
		<div className={styles.App}>
			<Navbar routes={appRoutes} />

			<FadeAppear>
				<Routes>
					{appRoutes.map((route, index) => {
						return (
							<Route
								path={getRouteUrl(route)}
								element={getRoutePage(route)}
								key={index}
							/>
						);
					})}

					<Route path="*" element={<NotFound />} />
				</Routes>
			</FadeAppear>
		</div>
	);
}

export default App;
