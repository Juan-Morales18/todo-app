import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { TodoItem } from "./TodoItem";
import { Filter } from "./Filter";

import "../styles/TodoList.scss";

function TodoList({
  todos,
  updateListOrder,
  activeFilter,
  handleChangeTodoStatus,
  handleDeleteTodo,
  handleClearCompleted,
  changeFilter,
}) {
  const getLeftTodos = todos.filter((todo) => todo.completed === false).length;

  const renderAllTodos = todos.map((todo, index) => (
    <TodoItem
      key={todo.id}
      index={index}
      todo={todo}
      handleChangeTodoStatus={handleChangeTodoStatus}
      handleDeleteTodo={handleDeleteTodo}
    />
  ));

  const renderActiveTodos = todos.map((todo, index) => {
    if (!todo.completed) {
      return (
        <TodoItem
          key={todo.id}
          index={index}
          todo={todo}
          handleChangeTodoStatus={handleChangeTodoStatus}
          handleDeleteTodo={handleDeleteTodo}
        />
      );
    }
    return "";
  });

  const renderCompletedTodos = todos.map((todo, index) => {
    if (todo.completed) {
      return (
        <TodoItem
          key={todo.id}
          index={index}
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
    if (activeFilter === "completed") {
      return renderCompletedTodos;
    }
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newList = Array.from(todos);
    const [targetItem] = newList.splice(result.source.index, 1);
    newList.splice(result.destination.index, 0, targetItem);

    updateListOrder(newList);
  };

  return (
    <section className="todo-list">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <div
              className="todo-list-wrapper"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTodos()}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

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
