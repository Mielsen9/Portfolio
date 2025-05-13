import React from "react";
import * as s from "./Portfolio.module.scss"
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import {ProjectList} from "@/features/ProgectList";
// Portfolio
const Portfolio: React.FC = () => {

	// Return
	return (
		<section className={s.backGround}>
			<div className={`${s.container} ${s.wrapper}`}>
				<SectionTitle title={"Portfolio"}
				              subtitle={"My last project"}
				              linkName={"Come Back"}
				              link={'/'}
				/>
				<div  className={s.projectList}>
					<ProjectList size={"large"}/>
				</div>
			</div>
		</section>
	)
};

export default Portfolio