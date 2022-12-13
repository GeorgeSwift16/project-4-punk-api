import "./Main.scss";
import CardBlock from "../CardBlock/CardBlock";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const Main = ({ beersArray }) => {
  const getSearchInput = (event) => {
    console.log(event.target.value);
  };
  return (
    <main className="main-content">
      <NavigationMenu searchinput={getSearchInput} />
      <CardBlock beersArray={beersArray} />
    </main>
  );
};

export default Main;
