import "../styles/TodoList.scss";
import { TodoItem } from "./TodoItem";

function TodoList({ todos, handleChangeTodoStatus, handleDeleteTodo }) {
  return (
    <section className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          handleChangeTodoStatus={handleChangeTodoStatus}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </section>
  );
}

export { TodoList };
