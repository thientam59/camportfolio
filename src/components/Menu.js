import React, { Component } from "react";

import { Link } from "react-router-dom";

class Menu extends Component {
  state = {
    showMenu: false
  };

  toggleMenu = () => {
    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu-btn");
    const menuNav = document.querySelector(".menu-nav");
    const menuBranding = document.querySelector(".menu-branding");
    const navItems = document.querySelectorAll(".nav-item");

    if (!this.state.showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      navItems.forEach(item => item.classList.add("show"));

      //Set menu state
      this.setState({ showMenu: true });
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      menuBranding.classList.remove("show");
      navItems.forEach(item => item.classList.remove("show"));

      //Set menu state
      this.setState({ showMenu: false });
    }
  };

  render() {
    return (
      <header>
        <div className="menu-btn" onClick={() => this.toggleMenu()}>
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait" />
          </div>

          <ul className="menu-nav">
            <li className="nav-item current">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/works" className="nav-link">
                My Work
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                How To Reach Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
