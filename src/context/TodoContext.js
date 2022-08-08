import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const TodoContext = createContext();

const initialTodos = [
  {
    id: "1",
    description: "This is the todo 1",
    completed: false,
  },
  {
    id: "2",
    description: "This is the todo 2",
    completed: false,
  },
  {
    id: "3",
    description: "This is the todo 3",
    completed: false,
  },
  {
    id: "4",
    description: "This is the todo 4",
    completed: false,
  },
  {
    id: "5",
    description: "This is the todo 5",
    completed: false,
  },
];

function TodoProvider({ children }) {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (description) => {
    const newTodo = {
      id: uuid(),
      description,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  const updateListOrder = (newListOrder) => setTodos(newListOrder);

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

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => todo.completed !== true);
    setTodos(updatedTodos);
  };

  const data = {
    todos,
    handleAddTodo,
    handleChangeTodoStatus,
    handleDeleteTodo,
    updateListOrder,
    handleClearCompleted,
  };

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
}

export { TodoContext, TodoProvider };
