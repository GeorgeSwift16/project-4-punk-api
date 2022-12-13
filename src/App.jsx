import "./App.scss";
import Main from "./containers/Main/Main";
import { useEffect, useState } from "react";

const App = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=2&per_page=80"
    );
    const data = await response.json();
    setBeers(data);
  };
  useEffect(() => {
    getBeers();
  }, []);

  return <Main beersArray={beers} />;
};
export default App;
