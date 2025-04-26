import React from "react";
import * as s from "./SocialLinks.module.scss"
import {iconColor, iconSize, socialLinks} from "../constants/constants";
// Type
type PropsType = {

};
// SocialLinks
export const SocialLinks: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<div className={s.container}>
			{socialLinks.map(({ name, url, icon: Icon }) => (
				<a key={name} href={url} target="_blank" rel="noopener noreferrer" className={s.icon}>
					<Icon size={iconSize} color={iconColor} />
				</a>
			))}
		</div>
	)
});

