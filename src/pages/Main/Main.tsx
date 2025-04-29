import React from "react";
import * as s from "./Main.module.scss"
import Header from "@/widgets/Header/Header";
import Intro from "@/widgets/Intro/Intro";
import ProfessionalSkills from "@/widgets/ProfessionalSkills/ProfessionalSkills";
import ContactMe from "@/widgets/ContactMe/ContactMe";
import Footer from "@/widgets/Footer/Footer";
type PropsType = {

};
// Main
const Main: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<div>
			{/*<Header/>*/}
			<Intro/>
			<ProfessionalSkills/>
			<ContactMe/>
			<Footer/>
		</div>
	)
});

export default Main