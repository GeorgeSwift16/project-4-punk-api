import FiltersItem from "../../components/FiltersItem/FiltersItem";
import "./FiltersList.scss";
const FiltersList = ({
  filtersInput,
  filterAcidic,
  filterClassics,
  filterABV,
}) => {
  return (
    <div className="filters">
      <ul className="filters__list">
        <FiltersItem
          filtersInput={filtersInput}
          filterABV={filterABV}
          filterClassics={filterClassics}
          filterAcidic={filterAcidic}
        />
      </ul>
    </div>
  );
};

export default FiltersList;
