import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./Helpers/ScrollToTop";
import HomePage from "./Pages/HomePage";
import FavoritesPage from "./Pages/FavoritesPage";
import SearchRender from "./RenderComponents/SearchRender";
import CategoryRender from "./RenderComponents/CategoryRender";
import CuisineRender from "./RenderComponents/CuisineRender";
import DetailsRender from "./RenderComponents/DetailsRender";

import {NotificationContainer} from "react-notifications";
import "react-notifications/lib/notifications.css";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Recipes-Search">
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/favorites" exact element={<FavoritesPage />} />
            <Route
              name="SearchCards"
              path="/search/:input"
              exact
              element={<SearchRender />}
            />
            <Route
              name="CategoryCards"
              path="/category/:category"
              exact
              element={<CategoryRender />}
            />
            <Route
              name="CuisineCards"
              path="/cuisine/:cuisine"
              exact
              element={<CuisineRender />}
            />
            <Route path="/:searchValue/:id" exact element={<DetailsRender />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <NotificationContainer/>
    </div>
  );
}

export default App;


// Syntax has changed

// Old Syntax

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// <Switch>
//     <Route path="/home" component={Home} />
// </Switch>

// New Syntax:

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// <Routes>
//     <Route path="/home" element={<Home/>} />
// </Routes>
