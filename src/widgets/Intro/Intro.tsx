import React from "react";
import * as s from "./Intro.module.scss"
import AboutMe from "@/entities/About me/AboutMe";
import MyImage from "@/entities/MyImage/MyImage";
import {SocialLinks} from "@/entities/SocialLinks";
import Header from "@/widgets/Header/Header";
// Type
type PropsType = {

};
// Intro
const Intro: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<header className={s.conteiner}>
			<div className={s.wrapper}>
				<Header style={"newStyle"}/>
				<div className={s.aboutMeContainer}>
					<MyImage/>
					<AboutMe/>
				</div>
				<SocialLinks/>
			</div>
		</header>
	)
});

export default Intro
