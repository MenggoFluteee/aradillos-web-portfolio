import React from "react";
import Header from "../../sections/Header/Header.jsx";
import Hero from "../../sections/Hero/Hero.jsx";
import Projects from "../../sections/Projects/Projects.jsx";
import Skills from "../../sections/Skills/Skills.jsx";
import Contact from "../../sections/Contact/Contact.jsx";
import Footer from "../../sections/Footer/Footer.jsx";

import "../../App.css";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
