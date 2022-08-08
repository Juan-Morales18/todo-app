import { useState } from "react";
import { Header } from "../components/Header";
import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";
import { Filter } from "../components/Filter";
import { DragAndDropInfo } from "../components/DragDropInfo";

import "../styles/MainContainer.scss";

function MainContainer() {
  const [activeFilter, setActiveFilter] = useState("all");

  const changeFilter = (newFilter) => setActiveFilter(newFilter);

  return (
    <div className="main-container">
      <Header />
      <TodoInput />
      <TodoList activeFilter={activeFilter} changeFilter={changeFilter} />
      <div className="mobile-filter">
        <Filter activeFilter={activeFilter} changeFilter={changeFilter} />
      </div>
      <DragAndDropInfo />
    </div>
  );
}

export { MainContainer };
