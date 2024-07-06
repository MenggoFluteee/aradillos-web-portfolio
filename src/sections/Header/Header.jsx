import { useState, useEffect } from "react";
import { useTheme } from "../../common/ThemeContext";
import styles from "./HeaderStyles.module.css";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import { Link } from "react-router-dom";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? moon : sun;

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${styles.desktopNav} ${scrolled ? styles.navScrolled : ""}`}
      >
        <div className={styles.navLogo}>Portfolio</div>
        <div>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/aradillos-web-portfolio/">Home</Link>
            </li>
            <li>
              <a href="#projects">Project</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <img
                className={styles.colorMode}
                src={themeIcon}
                alt="Color mode Icon"
                onClick={toggleTheme}
              />
            </li>
          </ul>
        </div>
      </nav>
      <nav
        className={`${styles.hamburgerNav} ${
          scrolled ? styles.navScrolled : ""
        }`}
      >
        <div className={styles.navLogo}>Portfolio</div>
        <div className={styles.hamburgerMenu}>
          <div className={styles.hamburgerIcon} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${styles.menuLinks} ${menuOpen ? styles.open : ""}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
