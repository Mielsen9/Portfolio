import React from "react";
import * as s from "./Portfolio.module.scss"
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import {ProjectList} from "@/features/ProgectList";
import AboutMe from "@/entities/About me/AboutMe";
import ContactMe from "@/widgets/ContactMe/ContactMe";
// Type
type PropsType = {

};
// Projects
const Portfolio: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<div className={s.backGround}>
			<section className={`${s.wrapper} ${s.container}`}>
				<div className={s.upContainer}>
					<div className={s.sectionTitleContainer}>
						<SectionTitle
							number= "02"
							title="Portfolio"
							subtitle="My latest work"
						/>
					</div>
					<ProjectList/>
				</div>
				<ContactMe/>
			</section>
		</div>
	)
});

export default Portfolio