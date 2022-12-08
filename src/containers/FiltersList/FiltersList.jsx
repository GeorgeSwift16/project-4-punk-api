import FiltersItem from "../../components/FiltersItem/FiltersItem";
import "./FiltersList.scss";
const FiltersList = () => {
  return (
    <div className="filters">
      <ul className="filters__list">
        <FiltersItem />
      </ul>
    </div>
  );
};

export default FiltersList;
