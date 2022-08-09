import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import "../styles/Header.scss";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeIcon = theme === "dark" ? "btn-dark" : "btn-light";

  return (
    <nav className="header">
      <h1 className="title">TODO</h1>
      <span
        className={`btn-switch-theme ${themeIcon}`}
        onClick={toggleTheme}
      ></span>
    </nav>
  );
}

export { Header };
