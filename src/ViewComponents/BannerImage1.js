// Banner Image on Homepage
// CALLED FROM: HomePage
// RETURN: Show big image

import React from "react";
import "./BannerImage.scss";
import bannerImage from "../Images/BannerImages/HomePage-BannerImage1.png";

const BannerImage1 = () => {
  return (
    <div className="banner-image__container">
      <img
        className="banner-image"
        src={bannerImage}
        alt="HomePageBannerImage1"
      />
    </div>
  );
};

export default BannerImage1;
