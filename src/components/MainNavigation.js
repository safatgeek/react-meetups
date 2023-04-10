import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Main Navigation</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meet-up">New meetup</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
