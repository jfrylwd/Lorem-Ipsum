import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <>
      <section data-scroll-section>
        <div id="welcome" className="container splash" data-scroll>
          <video muted autoPlay="autoplay" loop>
            <source src="waves.mp4" type="video/mp4"></source>
          </video>
          <div className="welcome" data-scroll data-scroll-speed="5">
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
            <a href="#getstarted" data-scroll-to>
              <button type="button">Get Started</button>
            </a>
          </div>
        </div>
      </section>
      {/* Next view */}
      <section id="getstarted" data-scroll-section>
        <div className="content flex justify-center where">
          <div className="m-1 w-24 flex">
            <img src="/nygold.jpeg" data-scroll data-scroll-speed="2" />
          </div>
          <div className="flex-col intro block">
            <p className="header" data-scroll data-scroll-speed="1">
              Lorem, where things work, beautifully
            </p>

            <p className="" data-scroll data-scroll-speed=".5">
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
      </section>
      {/* next view */}
      <section id="auth" data-scroll-section>
        <div className="content flex bg-lightgrey auth">
          <div className="px-4" data-scroll data-scroll-speed="2">
            <p className="header">Create an Account for Free</p>
            <p>
              <a>Already a member? Log in instead</a>
            </p>
          </div>
          <div className="" data-scroll data-scroll-speed="1">
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
      </section>
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
