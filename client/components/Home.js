import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <>
      <div className="container splash">
        <video muted autoPlay="autoplay" loop>
          <source src="waves.mp4" type="video/mp4"></source>
        </video>
        <div className="welcome">
          <div>
            <h3>Welcome to Lorem</h3>
          </div>
          <div>
            <p>
              This is a site intended to display the web design capabilities of
              Jeffrey Wood (MFA 2021) artist turned software engineer.
            </p>
          </div>
          <button type="button">Get Started</button>
        </div>
      </div>
      <div className="content header">
        Lorem, where things work, beautifully
      </div>
    </>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
