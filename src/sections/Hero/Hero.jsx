import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/keith.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import githubIcon from "../../assets/githubIcon.svg";
import cv from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImage}
          alt="profile picture of Allen Keith Aradillos"
          className={styles.hero}
        />

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Allen Keith <br />
          Aradillos
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://facebook.com" target="_blank">
            <img src={facebookIcon} alt="Facebook Icon" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>
          <a href="https://github.com" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </span>
     
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
