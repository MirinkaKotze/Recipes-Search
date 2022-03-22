// Show NO RESULTS MSG
// CALLED: When no results with loading API --> TopRatedRender
// RETURN: No results Msg

import React from "react";

import "./TopRated.scss";

const TopRatedNoResultsMsg = () => {
  return (
    <div className="top-rated__container">
      <h3 className="top-rated__header">TOP RATED RECIPES</h3>
      <h3 className="top-rated__message">
        There is no top rated recipes available.
      </h3>
    </div>
  );
};

export default TopRatedNoResultsMsg;
