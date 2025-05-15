import React from "react";
import * as s from "./SocialLinks.module.scss"
import {iconColor, iconSize, socialLinks} from "../constants/constants";
// Type
type PropsType = {
	position?: "vert";
};
// SocialLinks
export const SocialLinks: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<div className={`${s.container} ${p.position === "vert" ? s.vertical : s.horizontal}`}>
			{socialLinks.map(({ name, url, icon: Icon }) => (

				<a key={name}
				   href={url}
				   target="_blank"
				   rel="noopener noreferrer"
				>
					<div className={s.item}>
						<Icon size={iconSize}
						      color={iconColor}
						/>
						{p.position === "vert" && <p>{name}</p>}
					</div>
				</a>

			))}
		</div>
	)
});

