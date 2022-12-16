import Card from "../../components/Card/card";
import "./CardBlock.scss";
const CardBlock = ({ beersArray, searchInput }) => {
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

  const noBeers = beersArray.length < 1;

  return (
    <section className="cards-block">
      {noBeers && (
        <>
          <div>Sorry we cant find with a beer by the name of {searchInput}</div>
        </>
      )}
      {cardListJSX}
    </section>
  );
};
export default CardBlock;
