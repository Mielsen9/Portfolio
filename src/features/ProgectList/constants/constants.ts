import {Project} from "../type/type";
import Recipes from "@/asset/images/Projects/Recipes/RecipeTablet.png"
import CoinKeeper from "@/asset/images/Projects/CoinKeeper/CoinKeeperTablet.png"
import ToDoList from "@/asset/images/Projects/ToDoList/ToDoLiostTablet.png"
import ResumePZvir from "@/asset/images/Projects/Resume/ResumeTablet.png"
import CleverStudy from "@/asset/images/Projects/Clever/CleverTablet.png"
import Vpn from "@/asset/images/Projects/VPN/VPNTablet.png"
import Simpeco from "@/asset/images/Projects/Simpeco/Simpeco.png"
import Bose from "@/asset/images/Projects/Bose/Bose.png"
import Portfolio from "@/asset/images/Projects/Portfolio/tablet.png"

export const ProjectArray: Project[] = [
	{
		id: '1',
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
		id: '2',
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
		link: "https://mielsen9.github.io/CoinKepeer/",
		image: CoinKeeper
	},
	{
		id: '3',
		name: "ToDoList",
		technologies: [
			"HTML", "SCSS", "JavaScript", "React", "TypeScript",
			"Redux Toolkit", "Git", "Responsive", "Valid layout", "Material-UI", "Jest"
		],
		description:
			"Функціональний ToDo-застосунок для створення та керування списками справ.",
		functionality: [
			"Створення, редагування та видалення задач",
			"Фільтрація задач за статусом",
			"Збереження даних у локальному сховищі",
			"Адаптивний інтерфейс з Material-UI",
			"Юніт-тестування бізнес-логіки через Jest"
		],
		link: "https://mielsen9.github.io/ToDoList/",
		image: ToDoList
	},
	{
		id: '4',
		name: "ResumePZvir",
		technologies: ["HTML", "SCSS", "JavaScript", "Git", "Gulp", "Responsive", "Valid layout"],
		description:
			"Односторінковий адаптивний сайт-резюме, побудований з використанням сучасних практик верстки. " +
			"Автоматизовано робочі процеси за допомогою Gulp для оптимізації зображень, препроцесінгу SCSS і бандлінгу скриптів, що значно підвищило ефективність розробки.",
		functionality: [],
		link: "https://mielsen9.github.io/ResumePZvir/",
		image: ResumePZvir
	},
	{
		id: '5',
		name: "CleverStudy",
		technologies: ["HTML", "CSS", "JavaScript", "BEM", "Responsive", "Valid layout"],
		description: "Простий адаптивний лендінг з дотриманням семантичної розмітки, кросбраузерної сумісності та оптимальної продуктивності, що покращило користувацький досвід, створений на чистому HTML, CSS та JavaScript з використанням методології BEM.",
		functionality: [],
		link: "https://mielsen9.github.io/CleverStudy/",
		image: CleverStudy
	},
	{
		id: '6',
		name: "Vpn",
		technologies: ["HTML", "SCSS", "JavaScript", "Responsive", "Valid layout"],
		description:
			"Адаптивний лендінг VPN-сервісу, створений з акцентом на чисту верстку та оптимізовану структуру коду. " +
			"Стилі організовано модульно за допомогою SCSS із використанням змінних і міксинів для масштабованості та зручності оновлень.",
		functionality: [],
		link: "https://mielsen9.github.io/vpn/",
		image: Vpn
	},
	{
		id: '7',
		name: "Simpeco",
		technologies: ["HTML", "CSS", "JavaScript"],
		description: "Лендінг для компанії Simpeco, реалізований на чистому HTML, SCSS та JavaScript.",
		functionality: [],
		link: "https://mielsen9.github.io/Simpeco/",
		image: Simpeco
	},
	{
		id: '8',
		name: "Bose",
		technologies: ["HTML", "CSS"],
		description: "Лендінг, реалізований на чистому HTML, CSS",
		functionality: [],
		link: "https://mielsen9.github.io/Bose/",
		image: Bose
	},
	{
		id: '9',
		name: "Portfolio",
		technologies: [
			"HTML", "CSS/SCSS", "JavaScript", "React", "TypeScript",
			"Redux Toolkit", "Git", "Responsive", "Valid layout"
		],
		description: "Сучасний та адаптивний сайт-портфоліо," +
			" розроблений з використанням React і TypeScript." +
			" Валідна верстка, повністю підлаштована під різні пристрої. " +
			"Реалізовано ефекти паралаксу та плавні анімації для покращення " +
			"взаємодії з користувачем. Сайт демонструє професійні навички та " +
			"виконані проєкти.",
		functionality: ["Paralax"],
		link: "https://mielsen9.github.io/Portfolio/",
		image: Portfolio
	},
];