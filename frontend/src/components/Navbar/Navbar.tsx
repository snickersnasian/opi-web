import React, { ReactElement, useState } from 'react';
import styles from './Navbar.module.scss';
import Logo from 'src/assets/logo/Logo.svg';
import Cross from 'src/assets/icons/Cross.svg';
import Burger from 'src/assets/icons/Burger.svg';
import { BASE_URL } from 'src/types/paths';
import { NavbarProps } from './types';
import { getRouteUrl } from 'src/routes/hepers/getRouteUrl';
import { getRouteText } from 'src/routes/hepers/getRouteText';
import { useLocation } from 'react-router-dom';
import { FadeAppear } from '../FadeAppear/FadeAppear';
import { Typo } from 'src/lib/Typo/Typo';

export const Navbar = ({ routes }: NavbarProps): ReactElement => {
	const { pathname: currentRoute } = useLocation();

	const [isMenuVisible, setMenuVisibility] = useState(false);

	function handleMenuIconClick() {
		setMenuVisibility(!isMenuVisible);
	}

	return (
		<div className={styles.navBar}>
			<nav>
				<div className={styles.logo}>
					<a href={BASE_URL}>
						<img src={Logo} alt="" className="src" />
					</a>
				</div>

				<div onClick={handleMenuIconClick} className={styles.menuIcon}>
					{isMenuVisible ? (
						<img src={Cross} alt="" />
					) : (
						<img src={Burger} alt="" />
					)}
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

				{isMenuVisible && (
					<div className={styles.menuBurger}>
						<FadeAppear>
							<div className={styles.menuBurgerItems}>
								{routes.map((route, index) => {
									const activeStyle =
										getRouteUrl(route) === currentRoute
											? styles.navItemActive
											: '';

									return (
										<div
											key={index}
											className={`${styles.navItem} ${activeStyle}`}
										>
											<a
												key={index}
												href={getRouteUrl(route)}
												className={`${styles.navbarItem} ${Typo.TITLE_M_BOLD}`}
											>
												{getRouteText(route)}
											</a>
										</div>
									);
								})}
							</div>
						</FadeAppear>
					</div>
				)}
			</nav>
		</div>
	);
};
