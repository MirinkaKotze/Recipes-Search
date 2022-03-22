// Show No Results MSG
// CALLED: With loading API --> SearchRender && CategoryRender && CuisineRender
// RETURN: Header and No Results Msg

import React from "react";

import Header from "../ViewComponents/Header";

import "./Page.scss";

const NoResultsPage = (props) => {
  return (
    <div className="page__container">
      <Header pageHeaderInfo={props.pageHeaderInfo} />
      <h3 className="page__header">
        There is no results for your search. Please try again.
      </h3>
    </div>
  );
};
export default NoResultsPage;
