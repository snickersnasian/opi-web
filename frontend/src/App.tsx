import React, { ReactElement } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { IslandPanel } from './components/IslandPanel/IslandPanel';
import styles from './App.module.scss';
import { Button } from './components/Button/Button';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';

function App(): ReactElement {
	return (
		<div className={styles.App}>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
