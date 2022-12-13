import "./Main.scss";
import CardBlock from "../CardBlock/CardBlock";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import { useEffect, useState } from "react";

const Main = () => {
  const getSearchInput = (event) => {
    const userSearchInput = event.target.value;
    setsearchInput(userSearchInput);
  };

  const getFilterInput = (event) => {};

  const [beers, setBeers] = useState([]);
  const [searchInput, setsearchInput] = useState("");

  const getBeers = async (search) => {
    let url = `https://api.punkapi.com/v2/beers`;

    if (!searchInput) {
      url = `https://api.punkapi.com/v2/beers?page=1&per_page=80`;
    }
    if (searchInput) {
      url = `https://api.punkapi.com/v2/beers?beer_name=${search}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };
  useEffect(() => {
    getBeers(searchInput);
  }, [searchInput]);

  return (
    <main className="main-content">
      <NavigationMenu searchInput={getSearchInput} />
      <CardBlock beersArray={beers} />
    </main>
  );
};

export default Main;
