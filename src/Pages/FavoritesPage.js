// SHOW FAVOURITE RECIPE CARDS
// CALLED FROM: NavBar
// FUNCTION: Get/remove items from local storage
// RETURN: Recipe cards added to favourites

import React from "react";

import Header from "../ViewComponents/Header";
import RecipeCard from "../ViewComponents/RecipeCard";

import "./Page.scss";

const Favorites = () => {
  // Get favourite ID List from local storage
  const getArray = JSON.parse(localStorage.getItem("FavoritesIDList"));

  const favoriteHeaderInfo = {
    title: "FAVORITES",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  };

  //  If there are items in localStorage && items inside array.
  //      Only load cards --> If Array is in Localstorage (if not getArray === null) && If items inside array (if delete all items, array will be present, but empty)
  if (getArray != null && getArray.length > 0) {
    // Get favourite recipe object from local storage
    let favoritesInfo = [{}];
    for (let i = 0; i < getArray.length; i++) {
      let favID = getArray[i];
      favoritesInfo[i] = JSON.parse(localStorage.getItem(favID));
    }
    return (
      <div className="page__container">
        <Header pageHeaderInfo={favoriteHeaderInfo} />
        <div className="recipe-cards__container">
          {favoritesInfo.map((recipe) => {
            return (
              <RecipeCard
                url={recipe.url}
                key={recipe.id}
                id={recipe.id}
                img={recipe.img}
                title={recipe.title}
                category={recipe.category}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="page__container">
        <Header pageHeaderInfo={favoriteHeaderInfo} />
        <h3 className="page__header">There is no saved Favorites...</h3>
      </div>
    );
  }
};

export default Favorites;
