import "./Main.scss";
import CardBlock from "../CardBlock/CardBlock";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const Main = ({ beersArray }) => {
  console.log(beersArray);
  return (
    <main className="main-content">
      <NavigationMenu />
      <CardBlock beersArray={beersArray} />
    </main>
  );
};

export default Main;
