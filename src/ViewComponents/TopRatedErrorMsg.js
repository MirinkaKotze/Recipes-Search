// Show ERROR MSG
// CALLED: When error with loading API --> TopRatedRender
// RETURN: Error Msg

import React from "react";

import "./TopRated.scss";

const TopRatedErrorMsg = () => {
  return (
    <div className="top-rated__container">
      <h3 className="top-rated__header">TOP RATED RECIPES</h3>
      <h3 className="top-rated__message">
        There is an error loading the top rated recipes.
      </h3>
    </div>
  );
};

export default TopRatedErrorMsg;
