import React from "react";
import * as s from "./ProjectItem.module.scss"
import {Project} from "../../type/type";
// ProjectItem
const ProjectItem: React.FC<Project> = React.memo((p) => {

	// Return
	return (
		<a className={s.container}
		   style={{background: "red"}}
		   href={p.link}
		>
			<h5 className={s.title}>{p.name}</h5>
		</a>
	)
});

export default ProjectItem