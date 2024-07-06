import styles from "./SkillsStyles.module.css";
import htmlLogo from "../../assets/html.svg";
import cssLogo from "../../assets/css.svg";
import javascriptLogo from "../../assets/javascript.svg";
import phpLogo from "../../assets/php.png";
import laravelLogo from "../../assets/laravel.svg";
import flutterLogo from "../../assets/flutter.png";
import reactLogo from "../../assets/react.svg";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <div className={styles.logos}>
          <div className={styles.logosSlide}>
            <img src={htmlLogo} alt="" />
            <img src={cssLogo} alt="" />
            <img src={javascriptLogo} alt="" />
            <img src={phpLogo} alt="" />
            <img src={laravelLogo} alt="" />
            <img src={flutterLogo} alt="" />
            <img src={reactLogo} alt="" />
          </div>
          <div className={styles.logosSlide}>
            <img src={htmlLogo} alt="" />
            <img src={cssLogo} alt="" />
            <img src={javascriptLogo} alt="" />
            <img src={phpLogo} alt="" />
            <img src={laravelLogo} alt="" />
            <img src={flutterLogo} alt="" />
            <img src={reactLogo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
  