import "./FiltersItem.scss";
const FiltersItem = ({
  filtersInput,
  filterAcidic,
  filterClassics,
  filterABV,
}) => {
  const buttonStyling = (callerState) => {
    if (callerState) {
      return "filters__list-button--active";
    } else {
      return "filters__list-button";
    }
  };

  return (
    <>
      <li className="filters__list-item filters__list-item--1">
        <button
          onClick={filtersInput}
          className={buttonStyling(filterABV)}
          value="ABV"
        >
          Filter ABV ({">"}=6%)
        </button>
      </li>
      <li className="filters__list-item filters__list-item--2">
        <button
          onClick={filtersInput}
          className={buttonStyling(filterClassics)}
          value="Classics"
        >
          classic range
        </button>
      </li>
      <li className="filters__list-item filters__list-item--3">
        <button
          className={buttonStyling(filterAcidic)}
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
