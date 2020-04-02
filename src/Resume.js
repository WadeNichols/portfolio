import React from "react";

import resumePNG from "./assets/resumePNG.png";
import resumeP1 from "./assets/resumeP1.png"
import resumeP2 from "./assets/resumeP2.png"
export default function Resume() {
  return (
    <div className="resume-container">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossorigin="anonymous"
      />

      <h1 className="resume-title">Here's My Resume, Check It Out.</h1>

      <a className="resume-download" href="https://drive.google.com/file/d/1nx4OvC9QJ6YgIanjI-b1-UbA2JKg4y94/view?usp=sharing" target="_blank" >
        <i class="fas fa-file-download" />
      </a>
      <p>Download Resumé</p>

      <img className="resume" src={resumeP1} alt="" />
      <img className="resume" src={resumeP2} alt="" />
    </div>
  );
}
