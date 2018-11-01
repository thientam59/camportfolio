import React, { Component } from "react";

import Menu from "./Menu";

class Home extends Component {
  render() {
    const body = document.querySelector("body");
    body.setAttribute("id", "bg-img");

    return (
      <div>
        <Menu />

        <main id="home">
          <h1 className="lg-heading">
            Hiiam
            <span className="text-secondary">Cam</span>
          </h1>

          <h2 className="sm-heading">
            Web Developer, Mobile App Developer, Programmer & Designer
          </h2>

          <div className="icons">
            <a href="#!">
              <i className="fab fa-facebook fa-2x" />
            </a>
            <a href="#!">
              <i className="fab fa-github fa-2x" />
            </a>
            <a href="#!">
              <i className="fab fa-google fa-2x" />
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
