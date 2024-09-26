import HomePage from "./pages/HomePage";
import ProjectsListPage from "./pages/ProjectsListPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
import ContactsPage from "./pages/ContactsPage";
import AboutMePage from "./pages/AboutMePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/projects",
      element: <ProjectsListPage />,
    },
    {
      path: "/projects/:projectId",
      element: <ProjectPage />,
    },
    {
      path: "/contacts",
      element: <ContactsPage />,
    },
    {
      path: "/about-me",
      element: <AboutMePage />,
    },
  ],
  { basename: "/eglereact-portfolio" }
);
