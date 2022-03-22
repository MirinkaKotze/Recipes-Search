// Category Block on Homepage
// CALLED FROM: HomePage
// FUNCTION: Call CategoryRender after click on image
// RETURN: Category Block

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SideImage from "../Images/CategoryImages/Side.png";
import SeafoodImage from "../Images/CategoryImages/Seafood.png";
import BeefImage from "../Images/CategoryImages/Beef.png";
import ChickenImage from "../Images/CategoryImages/Chicken.png";
import DessertImage from "../Images/CategoryImages/Dessert.png";
import PorkImage from "../Images/CategoryImages/Pork.png";
import VegetarianImage from "../Images/CategoryImages/Vegetarian.png";

import "./Category.scss";

const Category = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
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
    <div className="category__container">
      <h3 className="category__header">SEARCH BY CATEGORY</h3>
      <div className="category__wrapper">
        <Slider {...settings}>
          <Link name="CategoryCards" to="/category/side">
            <img className="category__image" src={SideImage} alt="SideImage" />
          </Link>
          <Link name="CategoryCards" to="/category/seafood">
            <img
              className="category__image"
              src={SeafoodImage}
              alt="SeafoodImage"
            />
          </Link>
          <Link name="CategoryCards" to="/category/beef">
            <img className="category__image" src={BeefImage} alt="BeefImage" />
          </Link>
          <Link name="CategoryCards" to="/category/pork">
            <img className="category__image" src={PorkImage} alt="PorkImage" />
          </Link>
          <Link name="CategoryCards" to="/category/chicken">
            <img
              className="category__image"
              src={ChickenImage}
              alt="ChickenImage"
            />
          </Link>
          <Link name="CategoryCards" to="/category/vegetarian">
            <img
              className="category__image"
              src={VegetarianImage}
              alt="VegetarianImage"
            />
          </Link>
          <Link name="CategoryCards" to="/category/dessert">
            <img
              className="category__image"
              src={DessertImage}
              alt="DessertImage"
            />
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default Category;
