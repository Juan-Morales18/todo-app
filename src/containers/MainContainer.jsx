import { useState } from "react";
import { Header } from "../components/Header";
import { TodoList } from "../components/TodoList";
import { TodoInput } from "../components/TodoInput";
import { Filter } from "../components/Filter";

import "../styles/MainContainer.scss";

function MainContainer() {
  const [theme, setTheme] = useState("light");
  const [activeFilter, setActiveFilter] = useState("all");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const changeFilter = (newFilter) => setActiveFilter(newFilter);

  return (
    <main className="main-container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <TodoInput />
      <TodoList activeFilter={activeFilter} changeFilter={changeFilter} />
      <div className="mobile-filter">
        <Filter activeFilter={activeFilter} changeFilter={changeFilter} />
      </div>
    </main>
  );
}

export { MainContainer };
