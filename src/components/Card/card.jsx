import "./card.scss";
import placeHolderImage from "../../assets/images/noImage.png";
import { useState } from "react";
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
  // revisit if this or line height limit is better - maybe line height as will scale to bigger screens due to rem application?
  // const cutTaglineIndex = tagline.indexOf(" ", 20) + 1;

  const [showMoreInfo, setshowMoreInfo] = useState(false);

  const getMoreInfo = () => setshowMoreInfo(!showMoreInfo);

  const shortenedTagline = tagline.slice(0, 30) + "...";
  const shortenedName = name.slice(0, 30) + "...";

  const cutDescriptionIndex = description.indexOf(" ", 50) + 1;
  const shortenedDescription =
    description.slice(0, cutDescriptionIndex) + "...";
  const checkImage = image_url ?? placeHolderImage;
  return (
    <>
      {showMoreInfo && (
        <article role="button" className="card-more-info" onClick={getMoreInfo}>
          <figcaption className="card__text-content">
            <h5 className="card__heading">{name}</h5>
            <h6 className="card__sub-heading">{tagline}</h6>
            <p className="card__description-text">{description}</p>
          </figcaption>
        </article>
      )}
      <article role="button" className="card" onClick={getMoreInfo}>
        <figure className="card__image-container">
          <img className="card__image" src={checkImage} alt="beers" />
        </figure>
        <figcaption className="card__text-content">
          <h5 className="card__heading">{shortenedName}</h5>
          <h6 className="card__sub-heading">{shortenedTagline}</h6>
          <p className="card__description-text">{shortenedDescription}</p>
        </figcaption>
      </article>
    </>
  );
};
export default Card;
