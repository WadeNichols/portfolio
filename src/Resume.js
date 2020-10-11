import React from "react";

import resume1 from "./assets/resume1.png"
import resume2 from "./assets/resume2.png"
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
      <a className="reference-download" href="https://drive.google.com/file/d/1Qyix8cFH8UV61HCpYykXZEEaj7dlGhzf/view?usp=sharing">
       <i class="fas fa-file-download" />
      </a>
      <p>Letter of Reference</p>

      <img className="resume" src={resume1} alt="" />
      <img className="resume" src={resume2} alt="" />
    </div>
  );
}
