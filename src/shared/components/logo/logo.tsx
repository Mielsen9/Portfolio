import React from "react";
import * as s from "./logo.module.scss";

// Типи
type PropsType = {
	img: string;
	style?: string;
	href?: string;
	alt: string;
};

// Logo
const Logo: React.FC<PropsType> = React.memo(({ img, style, href, alt }) => {
	return (
		<div className={style}>
			<a href={href}>
				<img className={s.logo} src={img} alt={alt} />
			</a>
		</div>
	);
});

export default Logo;