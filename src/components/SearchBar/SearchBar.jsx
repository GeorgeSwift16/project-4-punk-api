import "./SearchBar.scss";

const SearchBar = ({ searchInput }) => {
  return (
    <div className="search-bar">
      <label htmlFor="search-box" className="search-bar__label">
        Search Our Beers Now!
      </label>
      <input
        type="text"
        name="search-box"
        className="search-bar__input"
        onChange={searchInput}
      />
    </div>
  );
};

export default SearchBar;
