// Show LOADING MSG
// CALLED: With loading API  --> SearchRender && CategoryRender && CuisineRender
// RETURN: Header and Loading Msg

import React from "react";

import Header from "../ViewComponents/Header";

import "./Page.scss";

const LoadingPage = (props) => {
  return (
    <div className="page__container">
      <Header pageHeaderInfo={props.pageHeaderInfo} />
      <h3 className="page__header">Loading...</h3>
    </div>
  );
};
export default LoadingPage;
