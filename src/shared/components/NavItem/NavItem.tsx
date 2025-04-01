import React from "react";
import * as s from "./NavItem.module.scss";

// Типи
type PropsType = {
	href?: string;
	id?: string;
	children: React.ReactNode;
};

// NavItem
const NavItem: React.FC<PropsType> = React.memo(({ href = "#", id, children }) => {
	// Return
	return (
		<li>
			<a href={href} className={s.navLink} data-goto={id}>
				{children}
			</a>
		</li>
	);
});

export default NavItem;