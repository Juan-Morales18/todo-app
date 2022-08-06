import "../styles/Header.scss";

function Header({ theme, toggleTheme }) {
  const btnThemeIcon = theme === "dark" ? "btn-dark" : "btn-light";

  return (
    <nav className="header">
      <h1 className="title">TODO</h1>
      <button
        type="button"
        className={`btn-switch-theme ${btnThemeIcon}`}
        onClick={toggleTheme}
      ></button>
    </nav>
  );
}

export { Header };
