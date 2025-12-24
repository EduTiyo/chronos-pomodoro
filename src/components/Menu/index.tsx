import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";

type availableThemes = "dark" | "light";

const Menu = () => {
  const [theme, setTheme] = useState<availableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as availableThemes) || "dark";
    return storageTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();

    setTheme(prev => {
      return prev === "dark" ? "light" : "dark";
    });
  };

  return (
    <nav className={styles.menu}>
      <Link
        to="/"
        className={styles.menuLink}
        aria-label="Ir a home"
        title="Ir a home"
      >
        <HouseIcon />
      </Link>
      <Link
        to="#"
        className={styles.menuLink}
        aria-label="Ver o histórico"
        title="Ver o histórico"
      >
        <HistoryIcon />
      </Link>
      <Link
        to="#"
        className={styles.menuLink}
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </Link>
      <Link
        to="#"
        className={styles.menuLink}
        aria-label="Mudar o tema"
        title="Mudar o tema"
        onClick={event => handleThemeChange(event)}
      >
        {nextThemeIcon[theme]}
      </Link>
    </nav>
  );
};

export default Menu;
