// NavBar on All Pages
// CALLED FROM: Header
// FUNCTION: Show sideBar with Page Links

import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";

import "./NavBar.scss";

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <div className="nav-bar__container">
      <Link to="#" className="nav-bar__menu-bars">
        <MenuIcon
          fontSize="large"
          onClick={showSideBar}
          sx={{ color: grey[500] }}
        />
      </Link>
      <nav className={sideBar ? "nav-bar__menu active" : "nav-bar__menu"}>
        <ul className="menu__items--wrapper" onClick={showSideBar}>
          <li className="menu__items--toggle">
            <Link to="#" className="nav-bar__menu-bars">
              <CloseIcon fontSize="large" sx={{ color: grey[500] }} />
            </Link>
          </li>
          <li className="menu__items--text">
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="menu__items--text">
            <Link to="/favorites">
              <span>Favorites</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
