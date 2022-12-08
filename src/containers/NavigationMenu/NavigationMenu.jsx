import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersList from "../FiltersList/FiltersList";
import "./NavigationMenu.scss";

const NavigationMenu = () => {
  return (
    <nav className="navigation-menu">
      <SearchBar />
      <FiltersList />
    </nav>
  );
};

export default NavigationMenu;
