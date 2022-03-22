// RECIPE INGREDIENTS
// CALLED FROM: RecipeDetailsPage
// Return: Recipe Ingredients

import React from "react";

import "./Ingredients.scss";

const Ingredients = (props) => {
  return (
    <div>
      <h3 className="ingredients__title">INGREDIENTS</h3>
      <div className="ingredients__info--container">
        <p className="ingredients__info--details">
          {props.recipeInfo.strMeasure1}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strIngredient1}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strMeasure2}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strIngredient2}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strMeasure3}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strIngredient3}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strMeasure4}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strIngredient4}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strMeasure5}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strIngredient5}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strMeasure6}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strIngredient6}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strMeasure7}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strIngredient7}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strMeasure8}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strIngredient8}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strMeasure9}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strIngredient9}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strMeasure10}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strIngredient10}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strMeasure11}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strIngredient11}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strMeasure12}
        </p>
        <p className="ingredients__info--details">
          {props.recipeInfo.strIngredient12}
        </p>
      </div>
    </div>
  );
};

export default Ingredients;
