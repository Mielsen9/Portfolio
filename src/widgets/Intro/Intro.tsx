import React from "react";
import * as s from "./Intro.module.scss"
import AboutMe from "@/entities/About me/AboutMe";
import MyImage from "@/entities/MyImage/MyImage";
import {SocialLinks} from "@/entities/SocialLinks";
// Type
type PropsType = {

};
// Intro
const Intro: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<div className={s.conteiner}>
			<div className={s.wrapper}>
				<div className={s.aboutMeContainer}>
					<MyImage/>
					<AboutMe/>
				</div>
				<SocialLinks/>
			</div>
		</div>
	)
});

export default Intro
