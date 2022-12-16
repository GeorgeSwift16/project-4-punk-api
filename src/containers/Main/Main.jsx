import "./Main.scss";
import CardBlock from "../CardBlock/CardBlock";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import { useEffect, useState } from "react";

const Main = () => {
  const [beers, setBeers] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const [filterABV, setFilterABV] = useState(false);
  const [filterClassics, setFilterClassics] = useState(false);
  const [filterAcidic, setFilterAcidic] = useState(false);
  // refactor to object

  const getSearchInput = (event) => {
    let initialUserSearchInput = event.target.value;
    setsearchInput(initialUserSearchInput);
  };

  const getFiltersUpdate = (event) => {
    if (event.target.value === "ABV") {
      setFilterABV(!filterABV);
    } else if (event.target.value === "Classics") {
      setFilterClassics(!filterClassics);
    } else if (event.target.value === "Acidic") {
      setFilterAcidic(!filterAcidic);
    }
  };

  const getUrl = (search, filterABV, filterClassics, filterAcidic) => {
    let url = `https://api.punkapi.com/v2/beers?`;
    if (filterClassics) {
      url += `brewed_before=01-2010&`;
    }
    if (filterABV) {
      url += `abv_gt=6&`;
    }
    if (search) {
      url += `beer_name=${search}&`;
    }
    getBeers(url, filterAcidic);
  };

  const getBeers = async (url, filterAcidic) => {
    const beersToDisplay = [];

    for (let pageNumber = 1; pageNumber < 6; pageNumber++) {
      let pageResult = `&page=${pageNumber}&per_page=80&`;
      const response = await fetch(url + pageResult);
      const data = await response.json();
      data.forEach((element) => {
        beersToDisplay.push(element);
      });
    }

    if (!filterAcidic) {
      setBeers(beersToDisplay);
      return;
    }

    const acidicBeers = beersToDisplay
      .filter((element) => element.ph && element.ph <= 4)
      .slice();

    setBeers(acidicBeers);
  };
  useEffect(() => {
    getUrl(searchInput, filterABV, filterClassics, filterAcidic);
  }, [searchInput, filterABV, filterClassics, filterAcidic]);

  return (
    <main className="main-content">
      <NavigationMenu
        filterABV={filterABV}
        filterClassics={filterClassics}
        filterAcidic={filterAcidic}
        filtersInput={getFiltersUpdate}
        searchInput={getSearchInput}
      />
      <CardBlock beersArray={beers} />
    </main>
  );
};

export default Main;
