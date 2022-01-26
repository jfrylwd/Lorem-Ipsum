import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = () => (
  <div className="navbar">
    <span className="header">Lorem-Ipsum</span>
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
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
