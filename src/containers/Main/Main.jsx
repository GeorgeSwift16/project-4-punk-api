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
    let url = `https://api.punkapi.com/v2/beers?`;
    if (filterClassics) {
      url += `brewed_before=01-2010&`;
    }
    if (filterABV) {
      url += `abv_gt=6&`;
    }
    search ? (url += `beer_name=${search}&`) : (url += `page=1&per_page=80&`);
    const response = await fetch(url);
    const data = await response.json();
    const acidicBeers = data
      .filter((element) => element.ph && element.ph <= 4)
      .slice();
    if (filterAcidic) {
      setBeers(acidicBeers);
    } else {
      setBeers(data);
    }
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
