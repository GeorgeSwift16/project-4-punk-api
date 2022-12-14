import "./FiltersItem.scss";
const FiltersItem = ({ filtersInput }) => {
  return (
    <>
      <li className="filters__list-item filters__list-item--1">
        <button
          onClick={filtersInput}
          className="filters__list-button button button-ABV"
          value="ABV"
        >
          Filter ABV ({">"}=6%)
        </button>
      </li>
      <li className="filters__list-item filters__list-item--2">
        <button
          onClick={filtersInput}
          className="filters__list-button button button-classic"
          value="Classics"
        >
          classic range
        </button>
      </li>
      <li className="filters__list-item filters__list-item--3">
        <button
          className="filters__list-button button button-acidic"
          onClick={filtersInput}
          value="Acidic"
        >
          Acidic (ph {"=<"} 4)
        </button>
      </li>
    </>
  );
};

export default FiltersItem;
