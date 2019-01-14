import React from "react";
import { Link } from "react-router-dom";

import resume from "./assets/resumePDF.pdf"
import resumePNG from "./assets/resumePNG.png"

function Resume() {
  return (
    <div className="container">
    <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossorigin="anonymous"
      />
      <h1 className="resume-title">Resume<a download href={resume} className="resume-download"><i class="fas fa-arrow-circle-down"></i></a></h1>
    <img className="resume" src={resumePNG} alt=""/>
    </div>
  );
}

export default Resume;
