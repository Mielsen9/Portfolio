import React from "react";
import * as s from "./SectionPortfolio.module.scss"
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import {ProjectList} from "@/features/ProgectList";
// SectionPortfolio
const SectionPortfolio: React.FC = () => {

	// Return
	return (
		<div className={s.backGround} id={"portfolio"}>
			<section className={`${s.wrapper} ${s.container}`}>
				<div className={s.upContainer}>
					<div className={s.sectionTitleContainer}>
						<SectionTitle number={"02"}
						              title={"Portfolio"}
						              subtitle={"My last project"}
						              linkName={"See More → "}
						              link={"/portfolio"}
						/>
					</div>
					<ProjectList/>
				</div>
			</section>
		</div>
	)
};

export default SectionPortfolio