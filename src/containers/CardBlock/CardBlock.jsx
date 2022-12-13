import Card from "../../components/Card/card";
import "./CardBlock.scss";
const CardBlock = ({ beersArray }) => {
  console.log(beersArray);
  return (
    <section className="cards-block">
      <Card beersArray={beersArray} />
    </section>
  );
};
export default CardBlock;
