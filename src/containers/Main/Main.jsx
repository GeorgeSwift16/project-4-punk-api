import "./Main.scss";
import CardBlock from "../CardBlock/CardBlock";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import { useEffect, useState } from "react";

const Main = () => {
  const getSearchInput = (event) => {
    let initialUserSearchInput = event.target.value;
    // to refactor back to usersearchinput = event.target.value if no way to make search strictly as typed.
    const userSearchInput = initialUserSearchInput.replace(" ", "_");
    console.log(userSearchInput);
    setsearchInput(userSearchInput);
  };

  // const getFilterInput = (event) => {};

  const [beers, setBeers] = useState([]);
  const [searchInput, setsearchInput] = useState("");

  const getBeers = async (search) => {
    let url = `https://api.punkapi.com/v2/beers`;
    // if search query exists add search query, if not show default.
    search ? (url += `?beer_name=${search}`) : (url += `?page=1&per_page=80`);
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
