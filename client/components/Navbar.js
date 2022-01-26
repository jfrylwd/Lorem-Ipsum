import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = () => (
  <div className="navbar">
    <span className="header ml-2">Lorem-Ipsum</span>
    <nav>
      <div>
        <Link to="/">Components</Link>
        <Link to="/">Text and Images</Link>
      </div>
      <div>
        <Link to="/">
          <button type="button">Sign Up</button>
        </Link>
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
