// Show Search Recipe Cards
// CALLED: After loading API --> SearchRender
// RETURN: Header and Recipe Cards based on search

import React from "react";

import Header from "../ViewComponents/Header";
import RecipeCard from "../ViewComponents/RecipeCard";

import "./Page.scss";

const SearchRecipesPage = (props) => { 
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
              category={recipe.strCategory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchRecipesPage;
