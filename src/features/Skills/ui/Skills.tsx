import React from "react";
import * as s from "./Skills.module.scss"
import SkillItem from "@/features/Skills/ui/SkillItem/SkillItem";
import {SkillsList} from "@/features/Skills/constants/constants";
// Type
type PropsType = {

};
// Skills
export const Skills: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<ul className={s.container}>
			{SkillsList.map((skill) => (
				<SkillItem key={skill.name} name={skill.name} level={skill.level} />
			))}
		</ul>
	)
});
