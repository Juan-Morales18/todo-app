import { useState } from "react";
import { Header } from "../components/Header";
import "../styles/MainContainer.scss";

function MainContainer() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <main className="main-container">
      <Header theme={theme} toggleTheme={toggleTheme} />
    </main>
  );
}

export { MainContainer };
