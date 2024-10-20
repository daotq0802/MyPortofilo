import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import Index from "./pages/Index.tsx";
import Project from "./pages/Project.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
// import ErrorPage from "./pages/ErrorPage.tsx";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/MyPortofilo" element={<Index />} />
                <Route path="/MyPortofilo/home" element={<Home />} />
                <Route path="/MyPortofilo/about" element={<About />} />
                <Route path="/MyPortofilo/project" element={<Project />} />
                <Route path="/MyPortofilo/contact" element={<Contact />} />
            </Routes>
        </Router>
    </StrictMode>
);
