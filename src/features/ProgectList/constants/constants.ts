import {Project} from "../type/type";
import Recipes from "@/asset/gulp/images/Projects/Recipes/RecipeTablet.png"
export const ProjectArray: Project[] = [
	{
		name: "Recipes",
		technologies: [
			"HTML", "CSS/SCSS", "JavaScript", "React", "TypeScript",
			"Redux Toolkit", "REST API", "Git", "Responsive", "Valid layout"
		],
		description: "Односторінковий застосунок для пошуку та перегляду кулінарних рецептів з інтеграцією до зовнішнього API.",
		functionality: [
			"Пошук рецептів за ключовими словами",
			"Фільтрація за категоріями",
			"Пагінація результатів",
			"Адаптивна та валідна верстка",
			"Керування станом через Redux Toolkit"
		],
		myRole: "Повний цикл розробки: верстка, логіка, підключення API, деплой",
		link: "https://mielsen9.github.io/Recipes/",
		image: Recipes
	},
	{
		name: "CoinKeeper",
		technologies: [
			"HTML", "CSS/SCSS", "JavaScript", "React", "TypeScript",
			"Redux Toolkit", "Git", "Responsive", "Valid layout"
		],
		description: "Односторінковий застосунок для контролю особистих фінансів. Проєкт перебуває в активній розробці.",
		functionality: [
			"Анімація перетягування елементів",
			"Адаптивна та валідна верстка",
			"Керування станом через Redux Toolkit"
		],
		myRole: "Повний цикл розробки: архітектура, логіка, інтерфейс",
		link: "https://mielsen9.github.io/CoinKepeer/"
	},
	{
		name: "ToDoList",
		technologies: [
			"HTML", "SCSS", "JavaScript", "React", "TypeScript",
			"Redux Toolkit", "Git", "Responsive", "Valid layout", "Material-UI", "Jest"
		],
		description:
			"Функціональний ToDo-застосунок для створення та керування списками справ. Реалізовано сучасну архітектуру на основі React і Redux Toolkit з використанням TypeScript для типобезпечності. Інтерфейс стилізовано за допомогою Material-UI. Написано unit-тести з використанням Jest для перевірки бізнес-логіки. Забезпечено адаптивність, кросбраузерність і чисту семантичну верстку.",
		functionality: [
			"Створення, редагування та видалення задач",
			"Фільтрація задач за статусом",
			"Збереження даних у локальному сховищі",
			"Адаптивний інтерфейс з Material-UI",
			"Юніт-тестування бізнес-логіки через Jest"
		],
		link: "https://mielsen9.github.io/ToDoList/",
		image: "https://www.sdf.com"
	},
	{
		name: "ResumePZvir",
		technologies: ["HTML", "SCSS", "JavaScript", "Git", "Gulp", "Responsive", "Valid layout"],
		description:
			"Односторінковий адаптивний сайт-резюме, побудований з використанням сучасних практик верстки. " +
			"Автоматизовано робочі процеси за допомогою Gulp для оптимізації зображень, препроцесінгу SCSS і бандлінгу скриптів, що значно підвищило ефективність розробки.",
		functionality: [],
		link: "https://mielsen9.github.io/ResumePZvir/",
		image: "https://www.sdf.com"
	},
	{
		name: "CleverStudy",
		technologies: ["HTML", "CSS", "JavaScript", "BEM", "Responsive", "Valid layout"],
		description: "Простий адаптивний лендінг з дотриманням семантичної розмітки, кросбраузерної сумісності та оптимальної продуктивності, що покращило користувацький досвід, створений на чистому HTML, CSS та JavaScript з використанням методології BEM.",
		functionality: [],
		link: "https://mielsen9.github.io/CleverStudy/",
		image: "https://www.sdf.com"
	},
	{
		name: "Vpn",
		technologies: ["HTML", "SCSS", "JavaScript", "Responsive", "Valid layout"],
		description:
			"Адаптивний лендінг VPN-сервісу, створений з акцентом на чисту верстку та оптимізовану структуру коду. " +
			"Стилі організовано модульно за допомогою SCSS із використанням змінних і міксинів для масштабованості та зручності оновлень.",
		functionality: [],
		link: "https://mielsen9.github.io/vpn/",
		image: "https://www.sdf.com"
	},
	{
		name: "Simpeco",
		technologies: ["HTML", "CSS", "JavaScript"],
		description: "Лендінг для компанії Simpeco, реалізований на чистому HTML, SCSS та JavaScript.",
		functionality: [],
		link: "https://mielsen9.github.io/Simpeco/",
		image: "https://www.sdf.com"
	},
	{   name: "Bose",
		technologies: ["HTML", "CSS"],
		description: "Лендінг, реалізований на чистому HTML, CSS",
		functionality: [],
		link: "https://mielsen9.github.io/Bose/",
		image: "https://www.sdf.com"
	},
	{   name: "Portfolio",
		technologies: [],
		description: "not found",
		functionality: [],
		link: "https://www.#.com",
		image: "https://www.sdf.com"
	},
];