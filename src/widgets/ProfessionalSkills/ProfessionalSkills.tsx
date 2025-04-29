import React from "react";
import * as s from "./ProfessionalSkills.module.scss"
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import {Skills} from "@/features/Skills";
// Type
type PropsType = {

};
// Professional Skills
const ProfessionalSkills: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<section className={s.backGround}>
			<div className={s.wrapper}>
				<div className={s.container}>
					<SectionTitle
						number= "01"
						title="Professional Skills"
						subtitle="My knowledge level in software"
					/>
					<Skills/>

				</div>
			</div>
		</section>
	)
});

export default ProfessionalSkills