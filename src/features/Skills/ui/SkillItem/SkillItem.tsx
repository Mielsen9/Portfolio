import React, {useEffect, useRef, useState} from "react";
import * as s from "./SkillItem.module.scss"
// Type
type PropsType = {
	name: string;
	level: number;
};
// SkillItem
const SkillItem: React.FC<PropsType> = React.memo((p) => {
	const ref = useRef<HTMLLIElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{
				threshold: 0.2, // 20% елемента має бути видно
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);
	// Return
	return (
		<li ref={ref}
		    className={s.container}>
			<div className={s.nameConteiner}>
				<p>{p.name}</p>
			</div>
			<div className={s.progressWrapper}>
				<span className={s.progres}
				      style={{ width: isVisible ? `${p.level}%` : '0%' }}
				></span>
			</div>
			<p className={s.percent}>{p.level} %</p>
		</li>
	)
});

export default SkillItem