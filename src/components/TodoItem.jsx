import "../styles/TodoItem.scss";

function TodoItem({ todo, handleChangeTodoStatus, handleDeleteTodo }) {
  const { id, description, completed } = todo;

  return (
    <article className="todo-item">
      <span
        className={`checkbox ${completed ? "checked" : ""}`}
        onClick={() => handleChangeTodoStatus(id)}
      />
      <p className={`description ${completed ? "cross-text" : ""}`}>
        {description}
      </p>
      <button className="btn-delete" onClick={() => handleDeleteTodo(id)} />
    </article>
  );
}

export { TodoItem };
