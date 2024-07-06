import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/keith.png";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import facebookIcon from "../../assets/facebookIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import githubIcon from "../../assets/githubIcon.svg";
import cv from "../../assets/cv.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImage}
          alt="profile picture of Allen Keith Aradillos"
          className={styles.hero}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.fullname}>
          Allen Keith Anib <br />
          <span className={styles.lastname}>Aradillos</span>
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
