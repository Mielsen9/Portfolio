import React from "react";
import * as s from "./ProjectList.module.scss"
import ProjectItem from "../ui/ProjectItem/ProjectItem";
import {Project} from "../type/type";
import {ProjectArray} from "../constants/constants";
// ProjectList
export const ProjectList : React.FC= React.memo(() => {

	// Return
	return (
		<ul className={s.container}>
			{ProjectArray.map((project: Project) => (
				<ProjectItem/>
			))}
		</ul>
	)
});
