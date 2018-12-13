import React from "react";
import { Link } from "react-router-dom";

import aboutMe from "./assets/aboutMe.png";
import projects from "./assets/projects.png";
import contactMe from "./assets/contactMe.png";

function Main() {
  return (
    <div className="main-body">
      <Link to={"/about"}>
        <img className="main-links" src={aboutMe} alt="" />
        <br />
      </Link>
      <Link to={"/projects"}>
        <img className="main-links" src={projects} alt="" />
        <br />
      </Link>
      <Link to={"/contact"}>
        <img className="main-links" src={contactMe} alt="" />
      </Link>
    </div>
  );
}

export default Main;
