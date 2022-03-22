// Show ERROR with loading MSG
// CALLED: When error with loading API --> SearchRender && CategoryRender && CuisineRender && DetailsRender
// RETURN: Header and Error Msg

import React from "react";

import Header from "../ViewComponents/Header";

import "./Page.scss";

const ErrorPage = (props) => {
  return (
    <div className="page__container">
      <Header pageHeaderInfo={props.pageHeaderInfo} />
      <h3 className="page__header">
        There was an error with your search. Please try again.
      </h3>
    </div>
  );
};
export default ErrorPage;