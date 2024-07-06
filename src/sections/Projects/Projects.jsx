import React from "react";

import styles from "./ProjectsStyles.module.css";

import bdmslogo from "../../assets/bdmslogo.png";
import osaslogo from "../../assets/osaslogo.png";
import cmunitylogo from "../../assets/cmunitylogo.png";

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          link="/aradillos-web-portfolio/cmubdms/"
          altText="CMU | BDMS"
          logo={bdmslogo}
          title="CMU | BDMS"
          description="Information System"
        ></ProjectCard>

        <ProjectCard
          link="/aradillos-web-portfolio/cmusoms/"
          altText="CMU | SOMS"
          logo={osaslogo}
          title="CMU | SOMS"
          description="Information System"
        ></ProjectCard>
        <ProjectCard
          link="/aradillos-web-portfolio/cmunity/"
          altText="CMUnity"
          logo={cmunitylogo}
          title="CMUnity"
          description="Social Media Application"
        ></ProjectCard>
      </div>
    </section>
  );
}

export default Projects;
