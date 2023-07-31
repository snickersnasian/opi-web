import React, { ReactElement } from 'react';
import './App.scss';
import { Button } from 'src/components/Button/Button';
import { Navbar } from './components/Navbar/Navbar';

function App(): ReactElement {
	return (
		<div className="App">
			<Navbar />
		</div>
	);
}

export default App;
