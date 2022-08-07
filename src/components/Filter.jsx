import "../styles/Filter.scss";

function Filter() {
  return (
    <div className="filter">
      <button className={`btn-filter`} type="button">
        All
      </button>
      <button className={`btn-filter`} type="button">
        Active
      </button>
      <button className={`btn-filter`} type="button">
        Completed
      </button>
    </div>
  );
}

export { Filter };
