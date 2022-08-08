import { TodoItem } from "./TodoItem";
import { Filter } from "./Filter";

import "../styles/TodoList.scss";

function TodoList({
  todos,
  activeFilter,
  handleChangeTodoStatus,
  handleDeleteTodo,
  handleClearCompleted,
  changeFilter,
}) {
  const getLeftTodos = todos.filter((todo) => todo.completed === false).length;

  const renderAllTodos = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      handleChangeTodoStatus={handleChangeTodoStatus}
      handleDeleteTodo={handleDeleteTodo}
    />
  ));

  const renderActiveTodos = todos.map((todo) => {
    if (!todo.completed) {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeTodoStatus={handleChangeTodoStatus}
          handleDeleteTodo={handleDeleteTodo}
        />
      );
    }
    return "";
  });

  const filteredTodos = () => {
    if (activeFilter === "all") {
      return renderAllTodos;
    }
    if (activeFilter === "active") {
      return renderActiveTodos;
    }
  };

  return (
    <section className="todo-list">
      <div className="todo-list-wrapper">{filteredTodos()}</div>
      <div className="todo-list-footer">
        <span>{getLeftTodos} items left</span>
        <div>
          <Filter activeFilter={activeFilter} changeFilter={changeFilter} />
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
