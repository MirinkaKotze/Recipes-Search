// Show LOADING MSG
// CALLED: With loading API --> TopRatedRender
// RETURN: Loading Msg

import React from "react";

import "./TopRated.scss";

const TopRatedLoadingMsg = () => {
  return (
    <div className="top-rated__container">
      <h3 className="top-rated__header">TOP RATED RECIPES</h3>
      <h3 className="top-rated__message">Loading...</h3>
    </div>
  );
};

export default TopRatedLoadingMsg;
