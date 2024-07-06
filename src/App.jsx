import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./sections/Header/Header.jsx";
import Hero from "./sections/Hero/Hero.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Skills from "./sections/Skills/Skills.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import Footer from "./sections/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";

import BDMS from "./pages/CMUBDMS/CMUBDMS.jsx";
import SOMS from "./pages/CMUSOMS/CMUSOMS.jsx";
import CMUnity from "./pages/CMUnity/CMUnity.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aradillos-web-portfolio" element={<Home />} />

        <Route path="/aradillos-web-portfolio/cmubdms" element={<BDMS />} />
        <Route path="/aradillos-web-portfolio/cmusoms" element={<SOMS />} />
        <Route path="/aradillos-web-portfolio/cmunity" element={<CMUnity />} />
      </Routes>
    </Router>
  );
}

export default App;
