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
    // to refactor back to usersearchinput = event.target.value if no way to make search strictly as typed.
    const userSearchInput = initialUserSearchInput.replace(" ", "_");
    setsearchInput(userSearchInput);
  };

  const getFiltersUpdate = (event) => {
    console.log(event.target.value);

    if (event.target.value === "ABV") {
      setFilterABV(!filterABV);
    } else if (event.target.value === "Classics") {
      setFilterClassics(!filterClassics);
    } else if (event.target.value === "Acidic") {
      setFilterAcidic(!filterAcidic);
    }
  };

  // create a function that takes in page number then loops through the function for each page from 1-5 with page as a parameter and the filters applied , the output of each loop is a temporaroy array that is then pushed to a temporary complete result array the result array is then set as the state so it passes down to the cardblock.  - this must be reset -

  const getBeers = async (search, filterABV, filterClassics, filterAcidic) => {
    const beersToDisplay = [];
    let url = `https://api.punkapi.com/v2/beers?`;
    // refactor 37-47 url func
    if (filterClassics) {
      url += `brewed_before=01-2010&`;
    }
    if (filterABV) {
      url += `abv_gt=6&`;
    }
    if (search) {
      url += `beer_name=${search}&`;
    }

    // wait for first result
    // wait for second result
    // ... 5

    // all fetchs happen at the same time

    for (let pageNumber = 1; pageNumber < 6; pageNumber++) {
      let pageResult = `&page=${pageNumber}&per_page=80&`;
      const response = await fetch(url + pageResult);
      const data = await response.json();
      data.forEach((element) => {
        beersToDisplay.push(element);
      });
    }

    // guard clause that allows us to leave the function asap
    if (!filterAcidic) {
      setBeers(beersToDisplay);
      return;
    }

    // filtering acidic beers, then deciding if we need to
    const acidicBeers = beersToDisplay
      .filter((element) => element.ph && element.ph <= 4)
      .slice();

    setBeers(acidicBeers);
  };
  useEffect(() => {
    getBeers(searchInput, filterABV, filterClassics, filterAcidic);
  }, [searchInput, filterABV, filterClassics, filterAcidic]);

  return (
    <main className="main-content">
      <NavigationMenu
        filtersInput={getFiltersUpdate}
        searchInput={getSearchInput}
      />
      <CardBlock beersArray={beers} />
    </main>
  );
};

export default Main;
