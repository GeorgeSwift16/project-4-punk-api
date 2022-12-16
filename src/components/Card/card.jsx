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

  const getShortenedTagline = (tagline) => {
    const isTaglineTooLong = tagline.length > 30;
    const cutTaglineIndex = tagline.indexOf(" ", 20) + 1;
    const shortenedTagLine = tagline.slice(0, cutTaglineIndex) + "...";
    if (isTaglineTooLong) {
      return shortenedTagLine;
    } else {
      return tagline;
    }
  };
  const getShortenedName = (name) => {
    const isnameTooLong = name.length > 30;
    const cutNameIndex = name.indexOf(" ", 20) + 1;
    const shortenedName = name.slice(0, cutNameIndex) + "...";
    if (isnameTooLong) {
      return shortenedName;
    } else {
      return name;
    }
  };

  const checkImage = image_url ?? placeHolderImage;
  return (
    <>
      {showMoreInfo && (
        <article
          role="button"
          className="card showmoreinfo"
          onClick={getMoreInfo}
        >
          <figcaption className="card__text-content">
            <h5 className="card__heading">{name}</h5>
            <h6 className="card__sub-heading">{tagline}</h6>
            <p className="card__description-text">{description}</p>
          </figcaption>
        </article>
      )}
      {!showMoreInfo && (
        <article role="button" className="card" onClick={getMoreInfo}>
          <figure className="card__image-container">
            <img className="card__image" src={checkImage} alt="beers" />
          </figure>
          <figcaption className="card__text-content">
            <h5 className="card__heading">{getShortenedName(name)}</h5>
            <h6 className="card__sub-heading">
              {getShortenedTagline(tagline)}
            </h6>
            <p className="card__description-text">Click to find out more!</p>
          </figcaption>
        </article>
      )}
    </>
  );
};
export default Card;
