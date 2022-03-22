// Render Recipe Cards
// CALLED: On category click from Category section in HomePage
// FUNCTION: Fetch API after category click
// RETURN: ErrorPage // LoadingPage // NoResultsPage // RecipesPage

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import LoadingPage from "../Pages/LoadingPage";
import NoResultsPage from "../Pages/NoResultsPage";
import RecipesPage from "../Pages/RecipesPage";

const CategoryRender = () => {
  // Get parameter(userInput) from link
  const { category } = useParams();
  const categoryTitle = category.toUpperCase();

  // Top Section title//image
  const headerInfoArray = [
    {
      title: "SIDE",
      image:
        "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      info: "CATEGORY",
    },
    {
      title: "BEEF",
      image:
        "https://images.pexels.com/photos/4294500/pexels-photo-4294500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      info: "CATEGORY",
    },
    {
      title: "PORK",
      image:
        "https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      info: "CATEGORY",
    },
    {
      title: "CHICKEN",
      image:
        "https://images.pexels.com/photos/5847876/pexels-photo-5847876.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      info: "CATEGORY",
    },
    {
      title: "SEAFOOD",
      image:
        "https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      info: "CATEGORY",
    },
    {
      title: "VEGETARIAN",
      image:
        "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      info: "CATEGORY",
    },
    {
      title: "DESSERT",
      image:
        "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      info: "CATEGORY",
    },
  ];

  let headerInfo = [];
  for (let i = 0; i < headerInfoArray.length; i++) {
    if (categoryTitle === headerInfoArray[i].title) {
      headerInfo = headerInfoArray[i];
    }
  }

  // API Request --> Retreived from: https://reactjs.org/docs/faq-ajax.html
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [recipeInfo, setRecipeInfo] = useState([]);

  useEffect(() => {
    fetch(`https://themealdb.p.rapidapi.com/filter.php?c=${category}`, {
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
          setError(true);
          setIsLoaded(true);
        }
      );
  }, [category]);

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
        <RecipesPage
          pageHeaderInfo={headerInfo}
          category={categoryTitle}
          url={category}
          recipeInfo={recipeInfo}
        />
      );
    }
  }
};

export default CategoryRender;
