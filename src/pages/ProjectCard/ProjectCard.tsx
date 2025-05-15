import React from "react";
import * as s from "./ProjectCard.module.scss"
import {useParams} from "react-router-dom";
import {ProjectArray} from "@/features/ProgectList/constants/constants";
import Img from "@/shared/ui/Img/Img";
// Type
type PropsType = {

};
// ProjectCard
const ProjectCard: React.FC<PropsType> = React.memo((p) => {
	const { id } = useParams<{ id: string }>();
	if (!id) return <p>ID не знайдено</p>;
	const project = ProjectArray.find(p => p.id === id);
	if (!project) return <p>Проєкт не знайдено</p>;

	// Return
		return (
			<section className={s.backGround}>
				<div className={s.wrapper}>
					<div className={s.card}>
						<button className={s.closeButton} onClick={() => window.history.back()}>
							&#x2715; {/* Символ хрестика */}
						</button>

						<div className={s.imageWrapper}>
							<Img srcJpg={project.image} loading="eager" />
						</div>
						<div className={s.info}>
							<h2 className={s.title}>{project.name}</h2>
							<p className={s.description}>{project.description}</p>

							<div className={s.tags}>
								{project.technologies.map((tech, index) => (
									<span key={`tech-${index}`}>{tech}</span>
								))}
							</div>

							<div className={s.tags}>
								{project.functionality.map((func, index) => (
									<span key={`func-${index}`}>{func}</span>
								))}
							</div>

							{project.link && (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className={s.link}
								>
									🔗 Visit Project
								</a>
							)}

							<p className={s.role}><strong>Моя роль:</strong> {project.myRole}</p>
						</div>
					</div>

				</div>
			</section>
		)
});

export default ProjectCard