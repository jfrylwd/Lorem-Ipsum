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
      <div className="navbar">
        <span className="header ml-2">
          <a href="#top">Lorem</a>
        </span>
        <nav>
          <div>
            <a href="#auth">Components</a>
            <a href="#getstarted">Text and Images</a>
          </div>
          <div>
            <a href="#auth">
              <button type="button">Sign Up</button>
            </a>
            <Link to="/">
              <button type="button">Login</button>
            </Link>
          </div>
        </nav>
        <div className="toggle" onClick={clickHandler}></div>
      </div>
      <div className={menu}>
        <ul>
          <li onClick={closeHandler}>
            <a href="#auth">Components</a>
          </li>
          <li onClick={closeHandler}>
            <a href="#getstarted">Text and Images</a>
          </li>
          <li onClick={closeHandler}>
            <a href="#auth">Sign Up</a>
          </li>
          <li onClick={closeHandler}>
            <a href="#">Login</a>
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
