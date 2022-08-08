import { Draggable } from "react-beautiful-dnd";
import "../styles/TodoItem.scss";

function TodoItem({ todo, index, handleChangeTodoStatus, handleDeleteTodo }) {
  const { id, description, completed } = todo;

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <article
          className="todo-item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span
            className={`checkbox ${completed ? "checked" : ""}`}
            onClick={() => handleChangeTodoStatus(id)}
          />
          <p className={`description ${completed ? "cross-text" : ""}`}>
            {description}
          </p>
          <button className="btn-delete" onClick={() => handleDeleteTodo(id)} />
        </article>
      )}
    </Draggable>
  );
}

export { TodoItem };
