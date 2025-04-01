import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Створення маршрутів за допомогою createBrowserRouter
export const router = createBrowserRouter([
		{
			path: "/",
			element: <App/> ,
			// children: [
			// 	{ path: "/", element: <RecipesPage /> },
			//
			// ],
		},
	],
	// {
	// 	basename: "b", // Шлях до репозиторію на GitHub
	// }
);