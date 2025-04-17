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
					I’m a front-end developer with a background in printing and a strong passion for clean,
					modern web development. I work with HTML5, SCSS, JavaScript (ES6+), and follow best practices
					like BEM, modular structure, and performance-first development. I build responsive, cross-browser
					layouts with pixel-perfect precision, optimize images and code for top Google PageSpeed scores,
					and always pay attention to accessibility and SEO. I’m comfortable with tools like Gulp, Webpack,
					and Git, and I enjoy working with animations, and third-party libraries.
					I’m constantly learning and focused on delivering fast, reliable, and user-friendly web experiences.
				</p>
			</div>
		</div>
	)
});

export default AboutMe