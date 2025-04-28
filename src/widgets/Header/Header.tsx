import React from "react";
import * as s from "./Header.module.scss"
import Logo from "@/shared/ui/Logo/Logo";
import { Nav } from "@/features/Nav";
// Type
type PropsType = {

};
// Header
const Header: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<div className={s.conteiner}>
			<div className={s.logo}>
				<Logo/>
			</div>
			<div>
				<Nav/>
			</div>
		</div>
	)
});

export default Header