import "../styles/Filter.scss";

function Filter({ activeFilter, changeFilter }) {
  return (
    <div className="filter">
      <button
        onClick={() => changeFilter("all")}
        className={`btn-filter ${activeFilter === "all" ? "active" : ""}`}
        type="button"
      >
        All
      </button>
      <button
        onClick={() => changeFilter("active")}
        className={`btn-filter ${activeFilter === "active" ? "active" : ""}`}
        type="button"
      >
        Active
      </button>
      <button
        onClick={() => changeFilter("completed")}
        className={`btn-filter ${activeFilter === "completed" ? "active" : ""}`}
        type="button"
      >
        Completed
      </button>
    </div>
  );
}

export { Filter };
