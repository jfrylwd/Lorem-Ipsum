import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <>
      <div id="#welcome" className="container splash">
        <video muted autoPlay="autoplay" loop>
          <source src="waves.mp4" type="video/mp4"></source>
        </video>
        <div className="welcome">
          <div>
            <h3>Welcome to Lorem</h3>
          </div>
          <div>
            <p>
              Best viewed on desktop/laptop - for now. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Illo omnis, ullam laboriosam
              eaque aliquid sit reprehenderit ut quibusdam molestiae impedit?
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
      <span id="getstarted"></span>
      <div className="content flex">
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
      {/* next view */}
      <div id="auth" className="content flex bg-lightgrey">
        <div className="px-4">
          <p className="header">Create an Account for Free</p>
          <p>
            <a>Already a member? Log in instead</a>
          </p>
        </div>
        <div className="">
          <form className="flex space-around flex-col">
            <label className="mx-1" htmlFor="name" />
            Name:
            <textarea
              style={{ resize: "none " }}
              cols="50"
              className="m-1"
              name="name"
              type="text"
            />
            <label className="mx-1" htmlFor="email" />
            Email:
            <textarea
              style={{ resize: "none " }}
              cols="50"
              className="m-1"
              name="email"
              type="text"
            />
            <label className="mx-1" htmlFor="confirmemail" />
            Confirm Email:
            <textarea
              style={{ resize: "none " }}
              cols="50"
              className="m-1"
              name="confirmemail"
              type="text"
            />
            <label className="mx-1" htmlFor="phone" />
            Phone:
            <textarea
              style={{ resize: "none " }}
              cols="50"
              className="m-1"
              name="phone"
              type="text"
            />
            <label className="mx-1" htmlFor="password" />
            Password:
            <textarea
              style={{ resize: "none " }}
              cols="50"
              className="m-1"
              name="password"
              type="password"
            />
            <label className="mx-1" htmlFor="news" />
            <div className="flex items-baseline">
              Subscribe to Newsletter:
              <input cols="50" name="news" type="checkbox" className="mx-1" />
            </div>
            <div>
              <button type="submit" className="pill">
                Subimt
              </button>
            </div>
          </form>
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
