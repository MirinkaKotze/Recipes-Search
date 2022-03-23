# Recipes-Search
Beetroot Academy - Final Project

DINEIN is a React recipe search web page.

  It gives you a selection of 10 Top Rated Recipes.
  It allows you to search any recipe or to search it based on an ingredient.
  You can look-up a selection of recipes based on the different categories
  Or by country-cuisine eg: Polish, American, Chinese
  And it also gives you the option to add any of the recipes to your Favorites to cook them later.
  
  The Recipes are Ready-To-Cook!
    A full discription of ingredients, measurements & instructions are provided for each recipe
    and some recipes even includes a demonstration video!

DESIGN:
  I created the design for the web page on Figma: https://www.figma.com/file/9E2WqZDgXIFL41g6e7wNpG/DINEIN?node-id=0%3A1
  for both desktop and Mobile view.

LIBRARIES:
  REACT-ROUTER-DOM: navigation between search, recipe-lists and recipe details page / sections.
  REACT-SLICK: add sliders to different sections on homepage for easy browse between categories and cuisines.
  MUI MATERIAL ICONS: help with visual navigation to more detailed sections of the page, 
      adding/removing recipes to and from favorites and to go back to previous sections.
  REACT-NOTIFICATIONS: is used to alert the user when a recipe is added or removed from favorites.
  REACT-PLAYER: play video instructions for the recipes.
  
DATA:
 TheMealDBAPI is used for all the recipe information. 
 LOCAL STORAGE is used to save the list of favorites & allows the favorites to be available after the web page was closed.

STYLING:
Is done with SASS / SCSS files.

RESPONSIVE:
  The web page is fully responisve and styling is done for every device.
  
URL:
  The url changes based on the search and page viewed.
