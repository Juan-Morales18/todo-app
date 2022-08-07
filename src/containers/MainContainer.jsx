import { useState } from "react";
import { Header } from "../components/Header";
import { TodoList } from "../components/TodoList";

import "../styles/MainContainer.scss";

const initialTodos = [
  {
    id: 1,
    description: "This is the todo 1",
    checked: false,
  },
  {
    id: 2,
    description: "This is the todo 2",
    checked: false,
  },
  {
    id: 3,
    description: "This is the todo 3",
    checked: false,
  },
  {
    id: 4,
    description: "This is the todo 4",
    checked: false,
  },
  {
    id: 5,
    description: "This is the todo 5",
    checked: false,
  },
];

function MainContainer() {
  const [theme, setTheme] = useState("light");
  const [todos, setTodos] = useState(initialTodos);

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

  return (
    <main className="main-container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <TodoList
        todos={todos}
        handleChangeTodoStatus={handleChangeTodoStatus}
        handleDeleteTodo={handleDeleteTodo}
      />
    </main>
  );
}

export { MainContainer };
