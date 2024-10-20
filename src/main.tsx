import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import Index from "./pages/Index.tsx";
import Project from "./pages/Project.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
let components;
switch (window.location.pathname) {
    case "/MyPortofilo":
        components = <Index />;
        break;
    case "/MyPortofilo/home":
        components = <Home />;
        break;
    case "/MyPortofilo/about":
        components = <About />;
        break;
    case "/MyPortofilo/project":
        components = <Project />;
        break;
    case "/MyPortofilo/contact":
        components = <Contact />;
        break;
    default:
        components = <ErrorPage />;
}
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {components}
    </StrictMode>
);
