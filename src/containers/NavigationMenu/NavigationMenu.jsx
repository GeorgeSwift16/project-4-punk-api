import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersList from "../FiltersList/FiltersList";
import "./NavigationMenu.scss";

const NavigationMenu = ({
  searchInput,
  filtersInput,
  filterAcidic,
  filterClassics,
  filterABV,
}) => {
  return (
    <nav className="navigation-menu">
      <SearchBar searchInput={searchInput} />
      <FiltersList
        filtersInput={filtersInput}
        filterABV={filterABV}
        filterClassics={filterClassics}
        filterAcidic={filterAcidic}
      />
      <h2 className="navigation-menu__header">Click A Beer!!</h2>
    </nav>
  );
};

export default NavigationMenu;
