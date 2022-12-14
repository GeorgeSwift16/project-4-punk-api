import Card from "../../components/Card/card";
import "./CardBlock.scss";
const CardBlock = ({ beersArray }) => {
  const cardListJSX = beersArray.map((beer) => {
    return (
      <Card
        key={beer.id}
        id={beer.id}
        image_url={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        abv={beer.abv}
        first_brewed={beer.first_brewed}
        ph={beer.ph}
        description={beer.description}
      />
    );
  });

  return <section className="cards-block">{cardListJSX}</section>;
};
export default CardBlock;
