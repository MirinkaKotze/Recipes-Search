// Render Recipe Cards
// CALLED: On submit from Search section in HomePage
// FUNCTION: Fetch API after search
// RETURN: ErrorPage // LoadingPage // NoResultsPage // SearchRecipesPage

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import LoadingPage from "../Pages/LoadingPage";
import NoResultsPage from "../Pages/NoResultsPage";
import SearchRecipesPage from "../Pages/SearchRecipesPage";

const SearchRender = () => {
  // Get parameter(userInput) from link
  const { input } = useParams();
  const inputTitle = input.toUpperCase();

  // Top Section title//image
  const headerInfo = {
    title: `${inputTitle}`,
    image:
      "https://images.pexels.com/photos/5794876/pexels-photo-5794876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "SEARCH",
  };

  // API Request --> Retreived from: https://reactjs.org/docs/faq-ajax.html
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [recipeInfo, setRecipeInfo] = useState([]);

  useEffect(() => {
    fetch(`https://themealdb.p.rapidapi.com/search.php?s=${input}`, {
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
        // Handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(true);
        }
      );
  }, [input]);

  // if no results is loaded from API --> 2 OPTIONS: 1. error 2. still loading
  if (recipeInfo.length === 0) {
    if (error) {
      return <ErrorPage pageHeaderInfo={headerInfo} />;
    } else if (!isLoaded) {
      return <LoadingPage pageHeaderInfo={headerInfo} />;
    }
    // Results are loaded from API --> 2 OPTIONS: 1. No results for search 2. Results found
  } else {
    if (recipeInfo.meals === null) {
      return <NoResultsPage pageHeaderInfo={headerInfo} />;
    } else {
      return (
        <SearchRecipesPage
          pageHeaderInfo={headerInfo}
          url={input}
          recipeInfo={recipeInfo}
        />
      );
    }
  }
};

export default SearchRender;
