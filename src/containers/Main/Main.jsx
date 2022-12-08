import "./Main.scss";
import CardBlock from "../CardBlock/CardBlock";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const Main = () => {
  return (
    <main className="main-content">
      <NavigationMenu />
      <CardBlock />
    </main>
  );
};

export default Main;
