import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "@/pages/Main/Main";
import Portfolio from "@/pages/Portfolio/Portfolio";
import ProjectCard from "@/pages/ProjectCard/ProjectCard";

// Створення маршрутів за допомогою createBrowserRouter
export const router = createBrowserRouter([
		{
			path: "/",
			element: <App/> ,
			children: [
				{ path: "/", element: <Main/> },
				{ path: "/portfolio", element: <Portfolio/> },
				{ path: "/portfolio/:id", element: <ProjectCard/> },
				{ path: "/:id", element: <ProjectCard/> },
			],
		},
	],
	{
		basename: "/zvir-petro-v-portfolio", // Шлях до репозиторію на GitHub
	}
);