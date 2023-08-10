import React, { ReactElement } from 'react';
import styles from './Navbar.module.scss';
import Logo from 'src/assets/logo/Logo.svg';
import { BASE_URL } from 'src/types/paths';
import { NavbarProps } from './types';
import { getRouteUrl } from 'src/routes/hepers/getRouteUrl';
import { getRouteText } from 'src/routes/hepers/getRouteText';
import { useLocation } from 'react-router-dom';

export const Navbar = ({ routes }: NavbarProps): ReactElement => {
	const { pathname: currentRoute } = useLocation();

	return (
		<div className={styles.navBar}>
			<nav>
				<div className={styles.logo}>
					<a href={BASE_URL}>
						<img src={Logo} alt="" className="src" />
					</a>
				</div>

				<div className={styles.navItemsWrapper}>
					<div className={styles.navItems}>
						{routes.map((route, index) => {
							const activeStyle =
								getRouteUrl(route) === currentRoute ? styles.navItemActive : '';

							return (
								<div key={index} className={`${styles.navItem} ${activeStyle}`}>
									<a
										key={index}
										href={getRouteUrl(route)}
										className={styles.navbarItem}
									>
										{getRouteText(route)}
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</nav>
		</div>
	);
};
