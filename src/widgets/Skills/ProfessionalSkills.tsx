import React from "react";
import * as s from "./ProfessionalSkills.module.scss"
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
// Type
type PropsType = {

};
// Professional Skills
const ProfessionalSkills: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<section className={s.container}>
			<SectionTitle
				title="01. Professional Skills"
				subtitle="My knowledge level in software"
			/>

		</section>
	)
});

export default ProfessionalSkills