import FiltersItem from "../../components/FiltersItem/FiltersItem";
import "./FiltersList.scss";
const FiltersList = ({ filtersInput }) => {
  return (
    <div className="filters">
      <ul className="filters__list">
        <FiltersItem filtersInput={filtersInput} />
      </ul>
    </div>
  );
};

export default FiltersList;
