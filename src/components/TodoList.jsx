import { TodoItem } from "./TodoItem";
import { Filter } from "./Filter";
import "../styles/TodoList.scss";

function TodoList({
  todos,
  handleChangeTodoStatus,
  handleDeleteTodo,
  handleClearCompleted,
}) {
  const getLeftTodos = todos.filter((todo) => todo.completed === false).length;

  return (
    <section className="todo-list">
      <div className="todo-list-wrapper">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeTodoStatus={handleChangeTodoStatus}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </div>
      <div className="todo-list-footer">
        <span>{getLeftTodos} items left</span>
        <div>
          <Filter />
        </div>
        <button
          type="button"
          className="todo-list-clear"
          onClick={handleClearCompleted}
        >
          Clear completed
        </button>
      </div>
    </section>
  );
}

export { TodoList };
