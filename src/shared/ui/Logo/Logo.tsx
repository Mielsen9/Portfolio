import React from "react";
import * as s from "./Logo.module.scss";
import LogoImg from "@/asset/images/svgicons/logo.svg";

// Типи
type PropsType = {
	href?: string;
};

// Logo
const Logo: React.FC<PropsType> = React.memo(({ href }) => {
	return (
		<a href={href || "#"}>
			<LogoImg className={s.logo}/>
		</a>
	);
});

export default Logo;