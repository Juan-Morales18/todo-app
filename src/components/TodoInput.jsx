import { useRef, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import "../styles/TodoInput.scss";

function TodoInput() {
  const { handleAddTodo } = useContext(TodoContext);
  const inputEl = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const typedValue = inputEl.current.value.trim();
    if (typedValue === "") return;

    handleAddTodo(typedValue);
    inputEl.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <span className="checkbox" onClick={handleSubmit} />
        <input
          className="input"
          autoFocus
          type="text"
          placeholder="Create a new todo..."
          ref={inputEl}
        />
      </div>
    </form>
  );
}

export { TodoInput };
