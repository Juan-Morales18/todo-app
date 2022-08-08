import { useState } from "react";
import { Header } from "../components/Header";
import { TodoList } from "../components/TodoList";
import { TodoInput } from "../components/TodoInput";

import "../styles/MainContainer.scss";

const initialTodos = [
  {
    id: 1,
    description: "This is the todo 1",
    completed: false,
  },
  {
    id: 2,
    description: "This is the todo 2",
    completed: false,
  },
  {
    id: 3,
    description: "This is the todo 3",
    completed: false,
  },
  {
    id: 4,
    description: "This is the todo 4",
    completed: false,
  },
  {
    id: 5,
    description: "This is the todo 5",
    completed: false,
  },
];

function MainContainer() {
  const [theme, setTheme] = useState("light");
  const [todos, setTodos] = useState(initialTodos);
  const [activeFilter, setActiveFilter] = useState("all");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleDeleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const handleChangeTodoStatus = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };

  const changeFilter = (newFilter) => setActiveFilter(newFilter);

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => todo.completed !== true);
    setTodos(updatedTodos);
  };

  return (
    <main className="main-container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <TodoInput />
      <TodoList
        todos={todos}
        activeFilter={activeFilter}
        handleChangeTodoStatus={handleChangeTodoStatus}
        handleDeleteTodo={handleDeleteTodo}
        handleClearCompleted={handleClearCompleted}
        changeFilter={changeFilter}
      />
    </main>
  );
}

export { MainContainer };
