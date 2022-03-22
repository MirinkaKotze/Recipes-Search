// Render Recipe Details
// CALLED: OnClick of details button on recipe cards
// FUNCTION: Fetch API
// RETURN: RecipeDetailsPage // ErrorPage // Loading message

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import RecipeDetailsPage from "../Pages/RecipeDetailsPage";

import "../Pages/Page.scss";

const DetailsRender = () => {
  // Get parameter( recipe id) from link
  const { id } = useParams();

  // Top Section title//image
  const headerInfo = {
    title: `${id}`,
    image:
      "https://images.pexels.com/photos/1132137/pexels-photo-1132137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    info: "ERROR",
  };

  // API Request --> Retreived from: https://reactjs.org/docs/faq-ajax.html
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState([]);

  useEffect(() => {
    fetch(`https://themealdb.p.rapidapi.com/lookup.php?i=${id}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
        "x-rapidapi-key": "39e68a7d52mshecd069d507b88c7p1833b2jsn21c6d457b36b",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setRecipeDetails(result);
          setIsLoaded(true);
        },
        // Handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(true);
        }
      );
  }, [id]);

  // if no results is loaded from API --> 2 OPTIONS: 1. error 2. still loading
  if (recipeDetails.length === 0) {
    if (error) {
      return <ErrorPage pageHeaderInfo={headerInfo} />;
    } else if (!isLoaded) {
      return (
        <div className="page__container">
          <h3 className="page__header">Loading...</h3>
        </div>
      );
    }
    // Results are loaded from API
  } else {
    return <RecipeDetailsPage recipeDetail={recipeDetails.meals[0]} />;
  }
};

export default DetailsRender;

// Retreive recipes: recipeDetails.meals[0].idMeal
