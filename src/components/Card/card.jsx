import "./card.scss";
const Card = ({
  id,
  image_url,
  name,
  tagline,
  description,
  abv,
  first_brewed,
  ph,
}) => {
  const cutDescriptionIndex = description.indexOf(" ", 20) + 1;
  const shortenedDescription =
    description.slice(0, cutDescriptionIndex) + "...";

  return (
    <>
      <article className="card">
        <figure className="card__image-container">
          <img className="card__image" src={image_url} alt="beers" />
        </figure>
        <figcaption className="card__text-content">
          <h5 className="card__heading">{name}</h5>
          <h6 className="card__sub-heading">
            {tagline} {abv}
          </h6>
          <p className="card__description-text">{description}</p>
        </figcaption>
      </article>
    </>
  );
};
export default Card;
