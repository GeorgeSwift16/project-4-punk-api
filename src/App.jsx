import "./App.scss";
import beers from "./data/beers";
import Main from "./containers/Main/Main";

const App = () => {
  console.log(beers);
  return <Main beersArray={beers} />;
};

export default App;
