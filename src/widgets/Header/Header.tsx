import React from "react";
import * as s from "./Header.module.scss"
import Logo from "@/shared/components/logo/logo";
// Type
type PropsType = {

};
// Header
const Header: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<div>
			<Logo/>
		</div>
	)
});

export default Header