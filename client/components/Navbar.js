import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = () => (
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
  </div>
);

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
