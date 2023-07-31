import React, { ReactElement } from 'react';
import styles from './Navbar.module.scss';
import Logo from 'src/assets/logo/Logo.svg';
import { BASE_URL } from 'src/types/paths';

export const Navbar = (): ReactElement => {
	return (
		<div className={styles.navBar}>
			<nav>
				<div className="logo">
					<a href={BASE_URL}>
						<img src={Logo} alt="" className="src" />
					</a>
				</div>
			</nav>
		</div>
	);
};
