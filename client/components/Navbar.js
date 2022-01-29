import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { useState, useEffect } from "react";

const Navbar = () => {
  let [toggle, setToggle] = useState(false);

  let menu = !toggle ? "menu" : "menu active";

  const clickHandler = (e) => {
    e.preventDefault();
    setToggle(!toggle ? true : false);
    e.target.className = !toggle ? "toggle active" : "toggle";
    menu = !toggle ? "menu active" : "menu";
  };

  const closeHandler = () => {
    setToggle(false);
  };

  return (
    <>
      <div className="navbar" data-scroll-section>
        <span className="header ml-2">
          <a href="#top" data-scroll-to>
            Lorem
          </a>
        </span>
        <nav>
          <div>
            <a href="#getstarted" data-scroll-to>
              About
            </a>
            <a href="#auth" data-scroll-to>
              Sign Up
            </a>
          </div>
          <div>
            <a href="#auth" data-scroll-to>
              <button type="button">Sign Up</button>
            </a>

            <button type="button">Login</button>
          </div>
        </nav>
        <div className="toggle" onClick={clickHandler}></div>
      </div>
      <div className={menu} data-scroll-section>
        <ul data-scroll>
          <li onClick={closeHandler}>
            <a href="#getstarted" data-scroll-to>
              About
            </a>
          </li>
          <li onClick={closeHandler}>
            <a href="#auth" data-scroll-to>
              Sign Up
            </a>
          </li>
          <li onClick={closeHandler}>
            <a href="#" data-scroll-to>
              Login
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
