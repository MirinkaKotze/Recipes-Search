// Render Recipe Cards
// CALLED: On flag click from Cuisine section in HomePage
// FUNCTION: Fetch API after flag click
// RETURN: ErrorPage // LoadingPage // NoResultsPage // RecipesPage

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import LoadingPage from "../Pages/LoadingPage";
import NoResultsPage from "../Pages/NoResultsPage";
import RecipesPage from "../Pages/RecipesPage";

const CuisineRender = () => {
  // Get parameter(userInput) from link
  const { cuisine } = useParams();
  const cuisineTitle = cuisine.toUpperCase();

  // Top Section title//image
  const headerInfoArray = [
    {
      title: "AMERICAN",
      image:
        "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      info: "CUISINE",
    },
    {
      title: "BRITISH",
      image:
        "https://images.unsplash.com/photo-1589114471223-dec0d8d572c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2NvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      info: "CUISINE",
    },
    {
      title: "CANADIAN",
      image:
        "https://images.pexels.com/photos/236804/pexels-photo-236804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      info: "CUISINE",
    },
    {
      title: "CHINESE",
      image:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      info: "CUISINE",
    },
    {
      title: "EGYPTIAN",
      image:
        "https://images.unsplash.com/photo-1542444256-164bd32f11fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1410&q=80",
      info: "CUISINE",
    },
    {
      title: "FRENCH",
      image:
        "https://images.pexels.com/photos/613056/pexels-photo-613056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      info: "CUISINE",
    },
    {
      title: "GREEK",
      image:
        "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      info: "CUISINE",
    },
    {
      title: "INDIAN",
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      info: "CUISINE",
    },
    {
      title: "ITALIAN",
      image:
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGl0YWxpYW4lMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      info: "CUISINE",
    },
    {
      title: "JAPANESE",
      image:
        "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      info: "CUISINE",
    },
    {
      title: "MALAYSIAN",
      image:
        "https://images.pexels.com/photos/7799695/pexels-photo-7799695.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      info: "CUISINE",
    },
    {
      title: "POLISH",
      image:
        "https://images.unsplash.com/photo-1590385014317-6a78bc23b090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHVtcGxpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      info: "CUISINE",
    },
  ];

  let headerInfo = [];
  for (let i = 0; i < headerInfoArray.length; i++) {
    if (cuisineTitle === headerInfoArray[i].title) {
      headerInfo = headerInfoArray[i];
    }
  }

  // API Request --> Retreived from: https://reactjs.org/docs/faq-ajax.html
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [recipeInfo, setRecipeInfo] = useState([]);

  useEffect(() => {
    fetch(`https://themealdb.p.rapidapi.com/filter.php?a=${cuisine}`, {
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
  }, [cuisine]);

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
          category={cuisineTitle}
          url={cuisine}
          recipeInfo={recipeInfo}
        />
      );
    }
  }
};

export default CuisineRender;
