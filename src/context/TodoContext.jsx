import { createContext } from "react";
import { v4 as uuid } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

const initialTodos = [];
const localStorageItem = "TODOS_DB";

function TodoProvider({ children }) {
  const { data: todos, saveData: saveTodos } = useLocalStorage(
    localStorageItem,
    initialTodos
  );

  const handleAddTodo = (description) => {
    const newTodo = {
      id: uuid(),
      description,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    saveTodos(updatedTodos);
  };

  const updateListOrder = (newListOrder) => saveTodos(newListOrder);

  const handleDeleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    saveTodos(newTodos);
  };

  const handleChangeTodoStatus = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    saveTodos(updatedTodos);
  };

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => todo.completed !== true);
    saveTodos(updatedTodos);
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
