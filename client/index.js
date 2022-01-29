import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./history";
import store from "./store";
import App from "./App";

import LocomotiveScroll from "locomotive-scroll";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

// let components = document.querySelector("#components");
// scroll.scrollTo("#auth", {
//   offset: 0,
//   callback: function () {
//     // do something...
//   },
//   duration: 600,
//   easing: [0.25, 0.0, 0.35, 1.0],
//   disableLerp: true,
// });

// components.on("click", scrollTo("auth"), {
//   offset: 0,
// });
