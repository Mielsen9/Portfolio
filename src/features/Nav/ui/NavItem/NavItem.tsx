import React from "react";
import * as s from "./NavItem.module.scss";

// Типи
type PropsType = {
	href?: string;
	id?: string;
	onClick?: () => void;
	children: React.ReactNode;
};

// NavItem
const NavItem: React.FC<PropsType> = React.memo(({ href = "#", id, children, onClick}) => {
	// Return
	return (
		<li>
			<a href={href} className={s.navLink} onClick={onClick} data-goto={id}>
				{children}
			</a>
		</li>
	);
});

export default NavItem;