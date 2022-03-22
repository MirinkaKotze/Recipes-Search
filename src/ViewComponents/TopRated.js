// Show TOP RATED RECIPE CARDS
// CALLED: Loading API --> TopRatedRender
// RETURN: Loading Msg

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RecipeCard from "../ViewComponents/RecipeCard";

import "./TopRated.scss";

const TopRated = (props) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplaySpeed: 2500,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="top-rated__container">
      <h3 className="top-rated__header">TOP RATED RECIPES</h3>
      <Slider {...settings} className="top-rated__wrapper">
        {props.recipeInfo.meals.map((recipe) => {
          return (
            <RecipeCard
              url={recipe.strCategory}
              key={recipe.idMeal}
              id={recipe.idMeal}
              img={recipe.strMealThumb}
              title={recipe.strMeal}
              category={recipe.strCategory}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default TopRated;
