// RECIPE DETAILS PAGE
// CALLED FROM: DetailsRender Component
// RETURN: Show Recipe details & Ingredients & Instructions

import React from "react";

import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { grey } from "@mui/material/colors";

import Ingredients from "../ViewComponents/Ingredients";
import Instructions from "../ViewComponents/Instructions";

import "./RecipeDetailsPage.scss";

const RecipeDetails = (props) => {
  const recipeInfo = props.recipeDetail;

  const title = recipeInfo.strMeal.toUpperCase();
  const category = recipeInfo.strCategory.toUpperCase();

  const navigate = useNavigate();

  return (
    <div className="recipe-details__page--container">
      <div className="recipe-details__header--container">
        <div className="recipe-details__header--left-info--wrapper">
          <button
            className="recipe-details__header--back-button"
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosIcon fontSize="large" sx={{ color: grey[500] }} />
          </button>
          <h2 className="recipe-details__header--title">{title}</h2>
          <p className="recipe-details__header--category">{category}</p>
          <Ingredients recipeInfo={recipeInfo} />
        </div>
        <div className="recipe-details__header--image-wrapper">
          <img
            src={recipeInfo.strMealThumb}
            alt={recipeInfo.strMeal}
            className="recipe-details__header--image"
          />
        </div>
      </div>
      <Instructions recipeInfo={recipeInfo} />
    </div>
  );
};

export default RecipeDetails;
