import React from "react";
import * as s from "./Main.module.scss"
import Intro from "@/widgets/Intro/Intro";
import ProfessionalSkills from "@/widgets/ProfessionalSkills/ProfessionalSkills";
import ContactMe from "@/widgets/ContactMe/ContactMe";
import Footer from "@/widgets/Footer/Footer";
import Projects from "@/widgets/Projects/Projects";
import ProfessionalSkillsBack from "@/asset/images/Skills/SkillsBack.png"
import ContactMeBack from "@/asset/images/ContactMe/backGroundContactMe.png"
// Main
const Main: React.FC = () => {

	// Return
	return (
		<div className={s.parallaxWrapper}>

			<div id={s.intro}>
				<Intro/>
			</div>

			<div className={`${s.parallaxGroup}`} id={s.professionalSkills}>
				<div className={`${s.parallaxLayer} ${s.midLayer}`}>
					<ProfessionalSkills/>
				</div>
				<div className={`${s.parallaxLayer} ${s.baseLayer}`}>
					<img src={ProfessionalSkillsBack} alt="Contact me background" />
				</div>
			</div>

			<div className={`${s.parallaxGroup}`} id={s.projects}>
				<Projects/>
			</div>

			<div className={`${s.parallaxGroup}`} id={s.contactMe}>
				<div className={`${s.parallaxLayer} ${s.midLayer}`} >
					<ContactMe/>
				</div>
				<div className={`${s.parallaxLayer} ${s.baseLayer}`}>
					<img src={ContactMeBack} alt="Contact me background" />
				</div>
			</div>

			<div>
				<Footer/>
			</div>
		</div>
	)
};

export default Main;