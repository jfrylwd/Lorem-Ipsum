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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              omnis, ullam laboriosam eaque aliquid sit reprehenderit ut
              quibusdam molestiae impedit?
            </p>
          </div>
          <a href="#getstarted">
            {" "}
            <button type="button">Get Started</button>
          </a>
        </div>

        {/* Next view */}
        {/* <span className="scroll">Scroll down</span> */}
      </div>

      <div id="getstarted" className="content flex">
        <img src="/nygold.jpeg" className="h-24 m-1" />

        <div className="flex-col">
          <p className="header ml-2 block px-4">
            Lorem, where things work, beautifully
          </p>

          <div className="ml-2 my-2 px-4">
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              omnis, ullam laboriosam eaque aliquid sit reprehenderit ut
              quibusdam molestiae impedit? Quasi quam autem impedit, excepturi
              cum eos nostrum. Itaque aperiam culpa sequi adipisci. Itaque
              placeat non natus! Qui, quis delectus? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Vitae sit adipisci labore excepturi
              hic, suscipit quibusdam inventore similique accusantium.Velit
              minus beatae voluptatum, culpa natus eos possimus! Impedit unde
              dolorem in, animi corrupti, consequatur laborum ipsum nisi est
              possimus obcaecati! Error odio quas accusamus harum nam temporibus
              culpa! Recusandae et numquam assumenda beatae odio porro quod
              dolores expedita ipsum quam.
            </p>
            <p>
              <button className="pill px-4 my-2">Create an Account</button>
            </p>
          </div>
        </div>
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
