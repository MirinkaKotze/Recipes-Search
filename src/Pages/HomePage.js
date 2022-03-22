// HomePage
// CALLED FROM: App
// RETURN: Header, SearchRender, BannerImages 1 & 2 & 3, Category, Cuisine

import React from "react";

import Header from "../ViewComponents/Header";
import TopRatedRender from "../RenderComponents/TopRatedRender";
import BannerImage1 from "../ViewComponents/BannerImage1";
import Search from "../ViewComponents/Search";
import BannerImage2 from "../ViewComponents/BannerImage2";
import Category from "../ViewComponents/Category";
import BannerImage3 from "../ViewComponents/BannerImage3";
import Cuisine from "../ViewComponents/Cuisine";

import "./Page.scss";

const HomePage = () => {
  const homeHeaderInfo = {
    title: "DINEIN",
    image:
      "https://images.pexels.com/photos/5591666/pexels-photo-5591666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    info: "WHAT`S COOKING ?",
  };

  return (
    <div className="page__container">
      <Header pageHeaderInfo={homeHeaderInfo} />
      <TopRatedRender />
      <BannerImage1 />
      <Search />
      <BannerImage2 />
      <Category />
      <BannerImage3 />
      <Cuisine />
    </div>
  );
};

export default HomePage;
