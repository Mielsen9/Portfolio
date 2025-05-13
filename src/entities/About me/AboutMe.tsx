import React from "react";
import * as s from "./AboutMe.module.scss"
// Type
type PropsType = {
	
};
// AboutMe
const AboutMe: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<div className={s.conteiner}>
			<h1 className={s.name}>Zvir Petro</h1>
			<h2 className={s.posada}>Front-end Developer</h2>
			<div className={s.text}>
				<h3 className={s.textTitle}>About me</h3>
				<p>
					Я фронтенд-розробник, орієнтований на створення сучасних, адаптивних і доступних вебзастосунків.
					Спеціалізуюся на HTML, CSS/SCSS та JavaScript, маю практичний досвід роботи з React, TypeScript і
					Redux Toolkit для створення масштабованої та підтримуваної архітектури. Дотримуюсь принципів
					семантичної та валідної розмітки, забезпечую адаптивну та кросбраузерну верстку з увагою до
					продуктивності та доступності. Впевнено працюю з REST API, системою контролю версій Git та
					впроваджую найкращі практики для написання чистого й оптимізованого коду, що забезпечує зручний
					і швидкий користувацький досвід.
				</p>
			</div>
		</div>
	)
});

export default AboutMe