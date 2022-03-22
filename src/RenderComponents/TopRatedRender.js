// Render 10 Random Recipe Cards
// CALLED: On HomePage load
// FUNCTION: Fetch API after load
// RETURN: TopRated Component // TopRatedErrorMsg // TopRatedLoadingMsg // TopRatedNoResultsMsg

import React from "react";
import { useState, useEffect } from "react";

import TopRatedErrorMsg from "../ViewComponents/TopRatedErrorMsg";
import TopRatedLoadingMsg from "../ViewComponents/TopRatedLoadingMsg";
import TopRatedNoResultsMsg from "../ViewComponents/TopRatedNoResultsMsg";
import TopRated from "../ViewComponents/TopRated";

const TopRatedRender = () => {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [recipeInfo, setRecipeInfo] = useState([]);

  // The empty deps array [] means this useEffect will run once similar to componentDidMount()
  useEffect(() => {
    fetch("https://themealdb.p.rapidapi.com/randomselection.php", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
        "x-rapidapi-key": "39e68a7d52mshecd069d507b88c7p1833b2jsn21c6d457b36b",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setRecipeInfo(result);
          setIsLoaded(true);
        },
        // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(true);
        }
      );
  }, []);

  //  if no results is loaded from API --> 2 OPTIONS: 1. error 2. still loading
  if (recipeInfo.length === 0) {
    if (error) {
      return <TopRatedErrorMsg />;
    } else if (!isLoaded) {
      return <TopRatedLoadingMsg />;
    }
    // Results are loaded from API --> 2 OPTIONS: 1. No results for search 2. Results found
  } else {
    if (recipeInfo.meals === null) {
      return <TopRatedNoResultsMsg />;
    } else {
      return <TopRated recipeInfo={recipeInfo} />;
    }
  }
};

export default TopRatedRender;
