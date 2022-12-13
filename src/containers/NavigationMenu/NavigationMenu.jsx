import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersList from "../FiltersList/FiltersList";
import "./NavigationMenu.scss";

const NavigationMenu = ({ searchInput }) => {
  return (
    <nav className="navigation-menu">
      <SearchBar searchInput={searchInput} />
      <FiltersList />
    </nav>
  );
};

export default NavigationMenu;
