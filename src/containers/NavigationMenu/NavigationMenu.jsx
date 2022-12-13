import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersList from "../FiltersList/FiltersList";
import "./NavigationMenu.scss";

const NavigationMenu = ({ searchinput }) => {
  return (
    <nav className="navigation-menu">
      <SearchBar searchinput={searchinput} />
      <FiltersList />
    </nav>
  );
};

export default NavigationMenu;
