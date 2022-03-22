// RECIPE INSTRUCTIONS
// CALLED FROM: RecipeDetailsPage
// Return: Recipe Instructions

import React from "react";
import ReactPlayer from "react-player";

import "./Instructions.scss";

const Instructions = (props) => { 
  if (props.recipeInfo.strYoutube.length === 0) {
    return (
      <div>
      <h3 className="instructions__title">INSTRUCTIONS</h3>
      <p className="instructions__info">{props.recipeInfo.strInstructions}</p>      
    </div>
    )
  } else {
    return (
      <div>
        <h3 className="instructions__title">INSTRUCTIONS</h3>
        <p className="instructions__info">{props.recipeInfo.strInstructions}</p>
        <h3 className="instructions__title">VIDEO INSTRUCTIONS</h3>
        <div className="instructions__video--wrapper">
        <ReactPlayer url={props.recipeInfo.strYoutube} width="780px" />
          {/* Console Error discussion --> No fix at this moment. Still working on it. -- https://github.com/CookPete/react-player/issues/508 */}
        </div>
      </div>
    );
  }
};
export default Instructions;
