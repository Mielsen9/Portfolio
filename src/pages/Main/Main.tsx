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

			<div className={`${s.parallaxGroup}`}>
				<Intro/>
			</div>

			<div className={`${s.parallaxGroup}` } id={s.group_1}>
				<div className={`${s.parallaxLayer} ${s.baseLayer}`}>
					<ProfessionalSkills/>
				</div>
				<div className={`${s.parallaxLayer} ${s.midLayer}`}>
					<ProfessionalSkillsBack/>
				</div>
			</div>

			<div className={`${s.parallaxGroup} ${s.projectsScreen}` }>
				<Projects/>
			</div>

			<div className={`${s.parallaxGroup}`} id={s.group_2}>
				<div className={`${s.parallaxLayer} ${s.baseLayer}`}>
					<ContactMe/>
				</div>
				<div className={`${s.parallaxLayer} ${s.midLayer}`}>
					<ContactMeBack/>
				</div>
			</div>

			<div className={`${s.parallaxGroup}` }>
				<Footer/>
			</div>
		</div>
	)
};

export default Main