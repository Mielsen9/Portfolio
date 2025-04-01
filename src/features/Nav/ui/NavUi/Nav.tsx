import React from "react";
import * as s from "./Nav.module.scss"
import NavItem from "@/shared/components/NavItem/NavItem";
import {NAV_ITEM} from "@/features/Nav/constants/constants";
import NavBtn from "@/features/Nav/ui/NavBtn/NavBtn";
import {useNav} from "@/features/Nav/hook/useNav";
// Nav
export const Nav: React.FC = () => {
	const { navToggle, navToggleHandler} = useNav()
	// Return
	return (
		<nav className={s.nav}>
			<ul className={`${s.navList} ${navToggle ? s.active : ""}`}>
				{NAV_ITEM.map((navItem: NavItemType, index: number) => (
					<NavItem key={index} href={navItem.href}>{navItem.name}</NavItem>
				))}
			</ul>
			<NavBtn onClick={navToggleHandler} toggle={navToggle}/>
		</nav>
	)
};

