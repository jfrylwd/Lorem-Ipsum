import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <container className="container">
      <video muted autoPlay="autoplay" loop>
        <source src="waves.mp4" type="video/mp4"></source>
      </video>
      <div className="welcome">
        <div>
          <h3>Welcome to Lorem</h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            aliquam nemo magnam assumenda, est asperiores dolorem dolor labore
            enim voluptate.
          </p>
        </div>
        <button type="button">Get Started</button>
      </div>
    </container>
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
