import React from "react";
import * as s from "./Projects.module.scss"
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
// Type
type PropsType = {

};
// Projects
const Projects: React.FC<PropsType> = React.memo((p) => {

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
					<div className={s.projectsContainer}>
						<div className={s.project}></div>
						<div className={s.project}></div>
						<div className={s.project}></div>
					</div>
				</div>
			</section>
		</div>
	)
});

export default Projects