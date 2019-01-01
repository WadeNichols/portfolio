import React from "react";
import { Link } from "react-router-dom";

import wadeLogo from "./assets/wadeLogo.png";

function Header() {
  return (
    <div className="header-container">
        <nav className="nav-container">
          <a className="nav" href="/">About</a>
          <a className="nav" href="/projects">Projects</a>
          <a className="nav" href="/resume">Resume</a>
        </nav>
      <Link to={"/"}>
        <img className="logoW" src={wadeLogo} alt="" />
      </Link>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossorigin="anonymous"
      />
      <div className="header-icons">
        <a
          target="_blank"
          href="https://github.com/WadeNichols"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          type="email"
          href="mailto: wnichols73@gmail.com?&subject=Resume%20Request"
        >
          <i class="fas fa-envelope" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/wade-nichols-9bb33a164/"
        >
          <i class="fab fa-linkedin" />
        </a>
      </div>
    </div>
  );
}

export default Header;
