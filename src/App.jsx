import "./App.scss";
import beers from "./data/beers";
import keg from "./assets/images/keg.png";

console.log(beers);

const App = () => {
  return (
    <main className="main-content">
      <nav className="navigation-menu">
        <div className="search-bar">
          <label htmlFor="search-box" className="search-bar__label">
            Search Our Beers Now!
          </label>
          <input type="text" name="search-box" className="search-bar__input" />
        </div>
        <div className="filters">
          <ul className="filters__list">
            <li className="filters__list-item filters__list-item--1"></li>
            <li className="filters__list-item filters__list-item--2"></li>
            <li className="filters__list-item filters__list-item--3"></li>
          </ul>
        </div>
      </nav>
      <section className="cards-block">
        <article class="card">
          <figure class="card__image-container">
            <img
              class="card__image"
              src={keg}
              alt="a tasty beer called {BEEERNAME}"
            />
          </figure>
          <figcaption class="card__text-content">
            <h5 class="card__heading">Buzz BEERS.NAME</h5>
            <h6 class="card__sub-heading">
              A Real Bitter Experience."BEERS.DESCIRPTION"
              <span className="card__ABV"> 4.5% ABV BEERS.ABV</span>
            </h6>
            <p class="card__description-text">
              A light, crisp and bitter IPA brewed with English and American
              hops. A small batch brewed only once. BEERS.DESCIRPTION
            </p>
          </figcaption>
        </article>
        <article class="card">
          <figure class="card__image-container">
            <img
              class="card__image"
              src={keg}
              alt="a tasty beer called {BEEERNAME}"
            />
          </figure>
          <figcaption class="card__text-content">
            <h5 class="card__heading">Buzz BEERS.NAME</h5>
            <h6 class="card__sub-heading">
              A Real Bitter Experience."BEERS.DESCIRPTION"
              <span className="card__ABV"> 4.5% ABV BEERS.ABV</span>
            </h6>
            <p class="card__description-text">
              A light, crisp and bitter IPA brewed with English and American
              hops. A small batch brewed only once. BEERS.DESCIRPTION
            </p>
          </figcaption>
        </article>
        <article class="card">
          <figure class="card__image-container">
            <img
              class="card__image"
              src={keg}
              alt="a tasty beer called {BEEERNAME}"
            />
          </figure>
          <figcaption class="card__text-content">
            <h5 class="card__heading">Buzz BEERS.NAME</h5>
            <h6 class="card__sub-heading">
              A Real Bitter Experience."BEERS.DESCIRPTION"
              <span className="card__ABV"> 4.5% ABV BEERS.ABV</span>
            </h6>
            <p class="card__description-text">
              A light, crisp and bitter IPA brewed with English and American
              hops. A small batch brewed only once. BEERS.DESCIRPTION
            </p>
          </figcaption>
        </article>
        <article class="card">
          <figure class="card__image-container">
            <img
              class="card__image"
              src={keg}
              alt="a tasty beer called {BEEERNAME}"
            />
          </figure>
          <figcaption class="card__text-content">
            <h5 class="card__heading">Buzz BEERS.NAME</h5>
            <h6 class="card__sub-heading">
              A Real Bitter Experience."BEERS.DESCIRPTION"
              <span className="card__ABV"> 4.5% ABV BEERS.ABV</span>
            </h6>
            <p class="card__description-text">
              A light, crisp and bitter IPA brewed with English and American
              hops. A small batch brewed only once. BEERS.DESCIRPTION
            </p>
          </figcaption>
        </article>
        <article class="card">
          <figure class="card__image-container">
            <img
              class="card__image"
              src={keg}
              alt="a tasty beer called {BEEERNAME}"
            />
          </figure>
          <figcaption class="card__text-content">
            <h5 class="card__heading">Buzz BEERS.NAME</h5>
            <h6 class="card__sub-heading">
              A Real Bitter Experience."BEERS.DESCIRPTION"
              <span className="card__ABV"> 4.5% ABV BEERS.ABV</span>
            </h6>
            <p class="card__description-text">
              A light, crisp and bitter IPA brewed with English and American
              hops. A small batch brewed only once. BEERS.DESCIRPTION
            </p>
          </figcaption>
        </article>
        <article class="card">
          <figure class="card__image-container">
            <img
              class="card__image"
              src={keg}
              alt="a tasty beer called {BEEERNAME}"
            />
          </figure>
          <figcaption class="card__text-content">
            <h5 class="card__heading">Buzz BEERS.NAME</h5>
            <h6 class="card__sub-heading">
              A Real Bitter Experience."BEERS.DESCIRPTION"
              <span className="card__ABV"> 4.5% ABV BEERS.ABV</span>
            </h6>
            <p class="card__description-text">
              A light, crisp and bitter IPA brewed with English and American
              hops. A small batch brewed only once. BEERS.DESCIRPTION
            </p>
          </figcaption>
        </article>
      </section>
    </main>
  );
};

export default App;
