import React, { Component } from "react";

import Menu from "./Menu";

import imgAvatar from "../img/portrait.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <Menu />

        <main>
          <h1 className="lg-heading">
            About
            <span className="text-secondary"> Me</span>
          </h1>

          <h2 class="sm-heading">Let me tell you a few things...</h2>

          <div className="about-info">
            <img src={imgAvatar} alt="HiiamCam" className="bio-image" />

            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt quod nemo sequi unde nostrum fuga et odio doloribus,
                dolores sint consectetur blanditiis repudiandae ratione
                consequatur sit corporis, delectus iste vero.
              </p>
            </div>

            <div className="job job-1">
              <h3>123 Webshop 1</h3>
              <h6>Full Stack Developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
                laboriosam corrupti repellat officia nam tenetur, est obcaecati
                delectus sit.
              </p>
            </div>

            <div className="job job-2">
              <h3>123 Webshop 2</h3>
              <h6>Designer & Front End Developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
                laboriosam corrupti repellat officia nam tenetur, est obcaecati
                delectus sit.
              </p>
            </div>

            <div className="job job-3">
              <h3>123 Webshop 3</h3>
              <h6>Designer & Front End Developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
                laboriosam corrupti repellat officia nam tenetur, est obcaecati
                delectus sit.
              </p>
            </div>
          </div>
        </main>

        <footer id="main-footer">Copyright &copy; 2018</footer>
      </div>
    );
  }
}

export default About;
