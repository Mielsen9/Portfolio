import React from "react";
import * as s from "./logo.module.scss";
import LogoImg from "@/asset/images/svgicons/logo.svg"

// Типи
type PropsType = {
	style?: string;
	href?: string;
};

// Logo
const Logo: React.FC<PropsType> = React.memo(({ style, href }) => {
	return (
		<div className={style}>
			<a href={href || "#"}>
				<LogoImg className={s.logo}/>
			</a>
		</div>
	);
});

export default Logo;