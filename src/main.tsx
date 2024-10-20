import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import Index from "./pages/Index.tsx";
import Project from "./pages/Project.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
// import ErrorPage from "./pages/ErrorPage.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/MyPortofilo/",
        element: <Index />,
    },
    {
        path: "/MyPortofilo/home",
        element: <Home />,
    },
    {
        path: "/MyPortofilo/about",
        element: <About />,
    },
    {
        path: "/MyPortofilo/project",
        element: <Project />,
    },
    {
        path: "/MyPortofilo/contact",
        element: <Contact />,
    },
]);
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
