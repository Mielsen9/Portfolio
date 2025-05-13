import React from "react";
import * as s from "./SectionTitle.module.scss"
import {Link} from "react-router-dom";
// Type
type PropsType = {
	number?: string;
	title: string;
	subtitle?: string;
	linkName?: string;
	link?: string;
};
// SectionTitle
const SectionTitle: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<div className={s.container}>
			<h2 className={s.title}>
				<span className={s.number}>{p.number}</span>
				{p.title}
			</h2>
			<div className={s.subTitleContainer}>
				<h5 className={s.subTitle}>{p.subtitle}</h5>
				{p.link && <Link to={p.link} className={s.link}>{p.linkName}</Link>}
			</div>
		</div>
	)
});

export default SectionTitle