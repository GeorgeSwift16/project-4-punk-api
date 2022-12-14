import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersList from "../FiltersList/FiltersList";
import "./NavigationMenu.scss";

const NavigationMenu = ({ searchInput, filtersInput }) => {
  return (
    <nav className="navigation-menu">
      <SearchBar searchInput={searchInput} />
      <FiltersList filtersInput={filtersInput} />
    </nav>
  );
};

export default NavigationMenu;
