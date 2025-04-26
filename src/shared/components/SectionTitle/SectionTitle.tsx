import React from "react";
import * as s from "./SectionTitle.module.scss"
// Type
type PropsType = {
	title: string;
	subtitle?: string;
};
// SectionTitle
const SectionTitle: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<div>
			<h2>{p.title}</h2>
			<p>{p.subtitle}</p>
		</div>
	)
});

export default SectionTitle