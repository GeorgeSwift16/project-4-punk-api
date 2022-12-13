import Keg from "../../assets/images/keg.png";
import "./card.scss";
const Card = ({ beersArray }) => {
  console.log(beersArray);
  return (
    <>
      <article className="card">
        <figure className="card__image-container">
          <img
            className="card__image"
            src={Keg}
            alt="a tasty beer called {BEEERNAME}"
          />
        </figure>
        <figcaption className="card__text-content">
          <h5 className="card__heading">Buzz BEERS.NAME</h5>
          <h6 className="card__sub-heading">
            A Real Bitter Experience." DESC" 4.5% ABV
          </h6>
          <p className="card__description-text">
            A light, crisp and bitter IPA brewed with English and American hops.
            A small batch brewed only once. DESC
          </p>
        </figcaption>
      </article>
      <article className="card">
        <figure className="card__image-container">
          <img
            className="card__image"
            src={Keg}
            alt="a tasty beer called {BEEERNAME}"
          />
        </figure>
        <figcaption className="card__text-content">
          <h5 className="card__heading">Buzz BEERS.NAME</h5>
          <h6 className="card__sub-heading">
            A Real Bitter Experience. DESC 4.5% ABV
          </h6>
          <p className="card__description-text">
            A light, crisp and bitter IPA brewed with English and American hops.
            A small batch brewed only once. DESC
          </p>
        </figcaption>
      </article>
      <article className="card">
        <figure className="card__image-container">
          <img
            className="card__image"
            src={Keg}
            alt="a tasty beer called {BEEERNAME}"
          />
        </figure>
        <figcaption className="card__text-content">
          <h5 className="card__heading">Buzz BEERS.NAME</h5>
          <h6 className="card__sub-heading">
            A Real Bitter Experience." DESC" 4.5% ABV
          </h6>
          <p className="card__description-text">
            A light, crisp and bitter IPA brewed with English and American hops.
            A small batch brewed only once. DESC
          </p>
        </figcaption>
      </article>
      <article className="card">
        <figure className="card__image-container">
          <img
            className="card__image"
            src={Keg}
            alt="a tasty beer called {BEEERNAME}"
          />
        </figure>
        <figcaption className="card__text-content">
          <h5 className="card__heading">Buzz BEERS.NAME</h5>
          <h6 className="card__sub-heading">
            A Real Bitter Experience." DESC" 4.5% ABV
          </h6>
          <p className="card__description-text">
            A light, crisp and bitter IPA brewed with English and American hops.
            A small batch brewed only once. DESC
          </p>
        </figcaption>
      </article>
      <article className="card">
        <figure className="card__image-container">
          <img
            className="card__image"
            src={Keg}
            alt="a tasty beer called {BEEERNAME}"
          />
        </figure>
        <figcaption className="card__text-content">
          <h5 className="card__heading">Buzz BEERS.NAME</h5>
          <h6 className="card__sub-heading">
            A Real Bitter Experience." DESC" 4.5% ABV
          </h6>
          <p className="card__description-text">
            A light, crisp and bitter IPA brewed with English and American hops.
            A small batch brewed only once. DESC
          </p>
        </figcaption>
      </article>
      <article className="card">
        <figure className="card__image-container">
          <img
            className="card__image"
            src={Keg}
            alt="a tasty beer called {BEEERNAME}"
          />
        </figure>
        <figcaption className="card__text-content">
          <h5 className="card__heading">Buzz BEERS.NAME</h5>
          <h6 className="card__sub-heading">
            A Real Bitter Experience." DESC" 4.5% ABV
          </h6>
          <p className="card__description-text">
            A light, crisp and bitter IPA brewed with English and American hops.
            A small batch brewed only once. DESC
          </p>
        </figcaption>
      </article>
    </>
  );
};
export default Card;
