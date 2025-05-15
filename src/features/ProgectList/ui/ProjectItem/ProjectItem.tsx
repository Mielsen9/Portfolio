import React from "react";
import * as s from "./ProjectItem.module.scss"
import {Project} from "../../type/type";
import {Link} from "react-router-dom";
// ProjectItem
const ProjectItem: React.FC<Project> = React.memo((p) => {

	// Return
	return (
		<Link to={p.id} className={s.container}
		   style={{ backgroundImage: `url(${p.image})` }}
		>
			<h5 className={s.title}>{p.name}</h5>
		</Link>
	)
});

export default ProjectItem