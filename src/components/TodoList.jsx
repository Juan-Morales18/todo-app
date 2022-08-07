import "../styles/TodoList.scss";
import { TodoItem } from "./TodoItem";

function TodoList({ todos }) {
  return (
    <section className="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </section>
  );
}

export { TodoList };
