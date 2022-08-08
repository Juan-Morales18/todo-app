import { TodoItem } from "./TodoItem";
import { Filter } from "./Filter";
import "../styles/TodoList.scss";
import { useState } from "react";

function TodoList({
  todos,
  activeFilter,
  handleChangeTodoStatus,
  handleDeleteTodo,
  handleClearCompleted,
  changeFilter,
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
