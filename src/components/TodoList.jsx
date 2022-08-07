import { TodoItem } from "./TodoItem";
import { Filter } from "./Filter";
import "../styles/TodoList.scss";

function TodoList({ todos, handleChangeTodoStatus, handleDeleteTodo }) {
  return (
    <section className="todo-list">
      <div className="todo-list-wrapper">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            handleChangeTodoStatus={handleChangeTodoStatus}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </div>
      <div className="todo-list-footer">
        <span>items left</span>
        <div>
          <Filter />
        </div>
        <button type="button" className="todo-list-clear">
          Clear completed
        </button>
      </div>
    </section>
  );
}

export { TodoList };
