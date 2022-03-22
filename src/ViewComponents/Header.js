// Header Block on Pages --> HomePage && ErrorPage && LoadingPage && NoResultsPage && RecipesPage && SearchRecipesPage
// CALLED FROM: HomePage
// RETURN: Header Block

import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import logo from "../Images/Logo.png";

import "./Header.scss";

const Header = (props) => { 
  
  return (
    <header className="header__container" style={{
      backgroundImage: `url(${props.pageHeaderInfo.image})`
    }}>
      <nav className="header__nav--wrapper">
        <Link to="/">
          <img className="header__nav--logo" src={logo} alt="dinein-logo" />
        </Link>
        <div className="header__nav-bar--wrapper">
          <NavBar />
        </div>
      </nav>
      <div className="header__title--wrapper">
        <h1 className="header__title--text">{props.pageHeaderInfo.title}</h1>
        <h2 className="header__title--moto">{props.pageHeaderInfo.info}</h2>
      </div>
    </header>
  );
};

export default Header;