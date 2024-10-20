import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import Index from "./pages/Index.tsx";
import Project from "./pages/Project.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
// import ErrorPage from "./pages/ErrorPage.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
    {
        path: "/",
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
        <Router>
            <Routes>
                <Route path="/MyPortofilo" element={<Index />} />
                <Route path="/MyPortofilo/home" element={<Home />} />
            </Routes>
        </Router>
    </StrictMode>
);
