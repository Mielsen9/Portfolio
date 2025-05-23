import React from "react";
import * as s from "./ProjectList.module.scss"
import ProjectItem from "../ui/ProjectItem/ProjectItem";
import {Project} from "../type/type";
import {ProjectArray} from "../constants/constants";
//Type
type ProjectListProps = {
	size?: "large";
}
// ProjectList
export const ProjectList : React.FC<ProjectListProps>= React.memo((p) => {

	// Return
	return (
		<ul className={p.size === "large" ? s.containerLarge : s.container}>
			{(p.size === "large" ? ProjectArray : ProjectArray.slice(0, 3)).map((project: Project) => (
				<div className={s.item}
				     key={project.id}
				>
					<ProjectItem id={project.id}
					             name={project.name}
					             technologies={project.technologies}
					             description={project.description}
					             functionality={project.functionality}
					             link={project.link}
					             image={project.image}
					/>
				</div>
			))}
		</ul>
	)
});
