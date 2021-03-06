import React from "react";
import { Link } from "react-router-dom";

import wadeLogo from "./assets/wadeLogo.png";
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className="header-container">
      <Link to={"/"}>
        <img className="logoW" src={wadeLogo} alt="" />
      </Link>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossorigin="anonymous"
      />
      {/* <Navbar/> */}
      <ol className="header-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/WadeNichols"
        >
          <i className="fab fa-github" />
        </a>
        <a
          type="email"
          href="mailto: kwnichols73@gmail.com?"
        >
          <i className="fas fa-envelope" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/wade-nichols"
        >
          <i className="fab fa-linkedin" />
        </a>
      </ol>
    </div>
  );
}
