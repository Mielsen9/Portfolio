import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "@/pages/Main/Main";
import Portfolio from "@/pages/Portfolio/Portfolio";

// Створення маршрутів за допомогою createBrowserRouter
export const router = createBrowserRouter([
		{
			path: "/",
			element: <App/> ,
			children: [
				{ path: "/", element: <Main/> },
				{ path: "/portfolio", element: <Portfolio/> },
			],
		},
	],
	// {
	// 	basename: "b", // Шлях до репозиторію на GitHub
	// }
);