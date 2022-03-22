// Cuisine Block on Homepage
// CALLED FROM: HomePage
// FUNCTION: Call CuisineRender after click on flag
// RETURN: Cuisine Block

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import American from "../Images/CuisineImages/American.png";
import British from "../Images/CuisineImages/British.png";
import Canadian from "../Images/CuisineImages/Canadian.png";
import Chinese from "../Images/CuisineImages/Chinese.png";
import Egyptian from "../Images/CuisineImages/Egyptian.png";
import French from "../Images/CuisineImages/French.png";
import Greek from "../Images/CuisineImages/Greek.png";
import Indian from "../Images/CuisineImages/Indian.png";
import Italian from "../Images/CuisineImages/Italian.png";
import Japanese from "../Images/CuisineImages/Japan.png";
import Malaysian from "../Images/CuisineImages/Malaysia.png";
import Polish from "../Images/CuisineImages/Polish.png";

import "./Cuisine.scss";

const Cuisine = () => {
  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },        
      },
      {
        breakpoint: 290,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="cuisine__container">
      <h3 className="cuisine__header">SEARCH BY CUISINE</h3>
      <div className="cuisine__wrapper">
        <Slider {...settings}>
          <div className="cuisine__country">
            <Link
              name="CuisineCards"
              to="/cuisine/american"
              className="cuisine__country--link"
            >
              <img
                className="cuisine__country--flag"
                src={American}
                alt="American"
              />
              <span className="cuisine__country--name">America</span>
            </Link>
          </div>
          <div className="cuisine__country">
            <Link
              name="CuisineCards"
              to="/cuisine/british"
              className="cuisine__country--link"
            >
              <img
                className="cuisine__country--flag"
                src={British}
                alt="British"
              />
              <span className="cuisine__country--name">British</span>
            </Link>
          </div>
          <div className="cuisine__country">
            <Link
              name="CuisineCards"
              to="/cuisine/canadian"
              className="cuisine__country--link"
            >
              <img
                className="cuisine__country--flag"
                src={Canadian}
                alt="Canadian"
              />
              <span className="cuisine__country--name">Canadian</span>
            </Link>
          </div>
          <div className="cuisine__country">
            <Link
              name="CuisineCards"
              to="/cuisine/chinese"
              className="cuisine__country--link"
            >
              <img
                className="cuisine__country--flag"
                src={Chinese}
                alt="Chinese"
              />
              <span className="cuisine__country--name">Chinese</span>
            </Link>
          </div>
          <div className="cuisine__country">
            <Link
              name="CuisineCards"
              to="/cuisine/egyptian"
              className="cuisine__country--link"
            >
              <img
                className="cuisine__country--flag"
                src={Egyptian}
                alt="Egyptian"
              />
              <span className="cuisine__country--name">Egyptian</span>
            </Link>
          </div>
          <div className="cuisine__country">
            <Link
              name="CuisineCards"
              to="/cuisine/french"
              className="cuisine__country--link"
            >
              <img
                className="cuisine__country--flag"
                src={French}
                alt="French"
              />
              <span className="cuisine__country--name">French</span>
            </Link>
          </div>
          <div className="cuisine__country">
            <Link
              name="CuisineCards"
              to="/cuisine/greek"
              className="cuisine__country--link"
            >
              <img className="cuisine__country--flag" src={Greek} alt="Greek" />
              <span className="cuisine__country--name">Greek</span>
            </Link>
          </div>
          <div className="cuisine__country">
            <Link
              name="CuisineCards"
              to="/cuisine/indian"
              className="cuisine__country--link"
            >
              <img
                className="cuisine__country--flag"
                src={Indian}
                alt="Indian"
              />
              <span className="cuisine__country--name">Indian</span>
            </Link>
          </div>
          <div className="cuisine__country">
            <Link
              name="CuisineCards"
              to="/cuisine/italian"
              className="cuisine__country--link"
            >
              <img
                className="cuisine__country--flag"
                src={Italian}
                alt="Italian"
              />
              <span className="cuisine__country--name">Italian</span>
            </Link>
          </div>
          <div className="cuisine__country">
            <Link
              name="CuisineCards"
              to="/cuisine/japanese"
              className="cuisine__country--link"
            >
              <img
                className="cuisine__country--flag"
                src={Japanese}
                alt="Japanese"
              />
              <span className="cuisine__country--name">Japanese</span>
            </Link>
          </div>
          <div className="cuisine__country">
            <Link
              name="CuisineCards"
              to="/cuisine/malaysian"
              className="cuisine__country--link"
            >
              <img
                className="cuisine__country--flag"
                src={Malaysian}
                alt="Malaysian"
              />
              <span className="cuisine__country--name">Malaysian</span>
            </Link>
          </div>
          <div className="cuisine__country">
            <Link
              name="CuisineCards"
              to="/cuisine/polish"
              className="cuisine__country--link"
            >
              <img
                className="cuisine__country--flag"
                src={Polish}
                alt="Polish"
              />
              <span className="cuisine__country--name">Polish</span>
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Cuisine;
