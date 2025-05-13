import React from "react";
import * as s from "./ProjectItem.module.scss"
import {Project} from "../../type/type";
// ProjectItem
const ProjectItem: React.FC<Project> = React.memo((p) => {

	// Return
	return (
		<a className={s.container}
		   style={{ backgroundImage: `url(${p.image})` }}
		   href={p.link}
		   target="_blank"
		   rel="noopener noreferrer"
		>
			<h5 className={s.title}>{p.name}</h5>
		</a>
	)
});

export default ProjectItem