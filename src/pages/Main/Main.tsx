import React, {useRef} from "react";
import * as s from "./Main.module.scss"
import Intro from "@/widgets/Intro/Intro";
import ProfessionalSkills from "@/widgets/ProfessionalSkills/ProfessionalSkills";
import ContactMe from "@/widgets/ContactMe/ContactMe";
import Footer from "@/widgets/Footer/Footer";
import SectionPortfolio from "@/widgets/SectionPortfolio/SectionPortfolio";
import {useStopScroll} from "@/shared/hook/StopScroll/useStopScroll";
// Main
const Main: React.FC = () => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const footerRef = useRef<HTMLDivElement>(null);

	useStopScroll({
		containerRef: wrapperRef,
		stopPointRef: footerRef
	});
	// Return
	return (
		<div className={s.parallaxWrapper} ref={wrapperRef}>

			<div id={s.intro}>
				<Intro/>
			</div>

			<div className={`${s.parallaxGroup}`} id={s.professionalSkills}>
				<div className={`${s.parallaxLayer} ${s.midLayer}`}>
					<ProfessionalSkills/>
				</div>
				<div className={`${s.parallaxLayer} ${s.baseLayer} ${s.professionalSkillsBackground}`} />
			</div>

			<div className={`${s.parallaxGroup}`} id={s.projects}>
				<SectionPortfolio/>
			</div>

			<div className={`${s.parallaxGroup}`} id={s.footer} >
				<div className={`${s.parallaxLayer} ${s.baseLayer} ${s.contactMeBackground}`} />
			</div>
			<div className={`${s.contactMe}`} id={s.ContactMe}>
				<ContactMe/>
			</div>


			<div ref={footerRef}>
				<Footer/>
			</div>
		</div>
	)
};

export default Main;