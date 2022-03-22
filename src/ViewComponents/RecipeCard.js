// SINGLE RECIPE NAME & IMAGE CARD
// CALLED FROM: SearchRender & CategoryRender & CuisineRender
// FUNCTION: Add/Remove card from local storage
// RETURN: Show Recipe cards

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

import { NotificationManager } from "react-notifications";

import "./RecipeCard.scss";

const Recipe = (props) => {
  const [favorites, setFavorites] = useState(() => {
    // Get items for local storage and update state//favourites-array if there is items stored on initial render
    const savedFavorites = localStorage.getItem("FavoritesIDList");
    const initialValue = JSON.parse(savedFavorites);
    return initialValue || [];
  });

  const addFav = () => {
    let favoritesArray = [];
    if (localStorage.getItem("FavoritesIDList") != null) {
      const previousSaved = JSON.parse(localStorage.FavoritesIDList);
      previousSaved.forEach((item) => {
        favoritesArray.push(item);
      });
    }
    let addToArray = true;
    // Go through arraylist & if item is already saved remove from list
    for (let i = 0; i < favoritesArray.length; i++) {
      if (favoritesArray[i] === props.id) {
        favoritesArray.splice([i], 1);
        addToArray = false;
        NotificationManager.warning(
          "Removed from Favorites!",
          `${props.title}`
        );
      }
    }
    // if addArray is true -- THUS it is not on the list --> add it
    if (addToArray) {
      favoritesArray.push(props.id);
      NotificationManager.success("Added to Favorites!", `${props.title}`);
    }
    // update favourites
    setFavorites([...favoritesArray]);
    localStorage.setItem("FavoritesIDList", JSON.stringify(favoritesArray));

    const storage = localStorage.getItem(props.id);
    if (storage === null) {
      localStorage.setItem(props.id, JSON.stringify(props));
    } else {
      localStorage.removeItem(props.id);
    }
  };

  return (
    <div className="recipe-card__container">
      <img className="recipe-card__image" src={props.img} alt={props.title} />
      <div className="recipe-card__wrapper">
        <h4 className="recipe-card__title">{props.title}</h4>
        <div className="recipe-card__info--wrapper">
          <div className="recipe-card__info--fav-button-wrapper">
            <button className="recipe-card__info--fav-button">
              {/* does favourites includes props.id ?? True//False --> if true show filled heart, if false open heart */}
              {favorites.includes(props.id) ? (
                <FavoriteIcon
                  fontSize="large"
                  color="action"
                  onClick={addFav}
                />
              ) : (
                <FavoriteBorderIcon
                  fontSize="large"
                  color="action"
                  onClick={addFav}
                />
              )}
            </button>
          </div>
          <p className="recipe-card__info--category">{props.category}</p>
          <div className="recipe-card__info--more-button-wrapper">
            <Link
              to={`/${props.url}/${props.id}`}
              className="recipe-card__info--more-button"
            >
              <ReadMoreIcon fontSize="large" color="action" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
