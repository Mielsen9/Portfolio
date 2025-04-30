import React from "react";
import * as s from "./ContactText.module.scss"
// Type
type PropsType = {

};
// ContactText
const ContactText: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<p className={s.contactText}>
			Маєте ідею або шукаєте фронтенд-розробника?
			Цікавить співпраця або фідбек щодо моїх робіт?
			Залиште повідомлення — я на зв’язку!
			Готовий до нових викликів і креативних завдань.
			Працюю з HTML, SCSS, JavaScript, WordPress, створюю адаптивні та швидкі інтерфейси з акцентом на UX.
			Відповідаю оперативно — обговоримо деталі та знайдемо найкраще рішення для вашого проєкту.
		</p>
	)
});

export default ContactText