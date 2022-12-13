## to do

1.  we have our search input captured in state - now where does this intersect with cardblock to enable passing it the correct data, are we best to filter the array in place and pass down, or should we adapt the url of the api request to match the input of the user.
2.  evaluate the options.

3.  limit description sent back to prevent poor display

4.  state vs props -
5.  - only state requriement is the search fields input and the tickbox, these should amalgamate into our url request,
6.  where owns the state? main is the interesectrion point of nav and cardblock so should own the state. as cardblock relies on the searchbar to render correct display.
    cardblock filters product list based on state
    searchbar dsiplays the search text - current state
    nav displays checked state
    nav and cardblock interest at main so main owns the state.
7.  This state needs to acccount for both the filtered element and the search terms so we ccan filter by abv then search, so our use state variable needs to have two keys and values usestate({searchinput: "", abvfilter: false, brewedbefore2010filter: false}) - so our beers statevariable is an object, we need to then dyhnamically update the url using this object. - > see the :params bit we did in routing.
8.  so state lives in main, but currently our function lives in app.
9.  options are to pass down the functions as a prop or to simply move the function to main,
10. need to pass a paramter into the getbeers function which takes in the state at that point. - need to destructure in place the state.
