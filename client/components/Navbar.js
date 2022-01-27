import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { useState } from "react";
const Navbar = () => {
  let [toggle, setToggle] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    setToggle(!toggle ? true : false);
    e.target.className = !toggle ? "toggle active" : "toggle";
  };

  return (
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
