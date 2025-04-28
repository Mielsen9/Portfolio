import React from "react";
import * as s from "./SectionTitle.module.scss"
// Type
type PropsType = {
	number: string;
	title: string;
	subtitle?: string;
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
			<h5 className={s.subTitle}>{p.subtitle}</h5>
		</div>
	)
});

export default SectionTitle