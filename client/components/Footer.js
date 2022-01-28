import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Footer = () => (
  <div className="footer bg-primary" data-scroll-section>
    <ul>
      <li>Site created by Jeffrey Wood (MFA 2021)</li>
      <li>
        <a href="https://github.com/JeffreyLWood">Github</a>
      </li>
      <li>
        <a href="https://github.com/JeffreyLWood/Lorem-Ipsum">Project Repo</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/jeffreylwood/">LinkedIn</a>
      </li>
      <li>
        <a href="https://jeffreylwood.com/">Website</a>
      </li>
      <li>
        <a href="mailto:jeffreywood.dev@gmail.com">jeffreywood.dev@gmail.com</a>
      </li>
    </ul>
    <ul>
      <li>Brooklyn, New York, NY</li>
      <li>
        2022
        <img src="./peace.png" className="thumbnail" />
      </li>
    </ul>
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

export default connect(mapState, mapDispatch)(Footer);
