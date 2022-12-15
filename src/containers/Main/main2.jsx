const getBeers = async (search, filterABV, filterClassics, filterAcidic) => {
  let beersToDisplay = [];
  let url = `https://api.punkapi.com/v2/beers?`;

  if (filterClassics) {
    url += `brewed_before=01-2010&`;
  }
  if (filterABV) {
    url += `abv_gt=6&`;
  }
  if (search) {
    url += `beer_name=${search}&`;
  }

  for (let pageNumber = 1; pageNumber < 6; pageNumber++) {
    let pageResult = `page=${pageNumber}&per_page=80&`;
    const response = await fetch(url + pageResult);
    const data = await response.json();
    beersToDisplay.push(data);
  }

  const acidicBeers = beersToDisplay
    .filter((element) => element.ph && element.ph <= 4)
    .slice();
  if (filterAcidic) {
    setBeers(acidicBeers);
  } else {
    setBeers(beersToDisplay);
  }
};
