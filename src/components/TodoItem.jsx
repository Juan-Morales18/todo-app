import "../styles/TodoItem.scss";

function TodoItem({ todo }) {
  const { description, checked } = todo;

  return (
    <article className="todo-item">
      <span className="checkbox" />
      <p className="description">{description}</p>
      <button className="btn-delete" />
    </article>
  );
}

export { TodoItem };
