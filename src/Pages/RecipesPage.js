// Recipe cards
// CALLED: After loading API --> CategoryRender && CuisineRender
// RETURN: Header and Recipe Cards

import React from "react";

import Header from "../ViewComponents/Header";
import RecipeCard from "../ViewComponents/RecipeCard";

import "./Page.scss";

const RecipesPage = (props) => {
  return (
    <div className="page__container">
      <Header pageHeaderInfo={props.pageHeaderInfo} />
      <div className="recipe-cards__container">
        {props.recipeInfo.meals.map((recipe) => {
          return (
            <RecipeCard
              url={props.url}
              key={recipe.idMeal}
              id={recipe.idMeal}
              img={recipe.strMealThumb}
              title={recipe.strMeal}
              category={props.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecipesPage;
