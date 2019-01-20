import React from "react";

//my imports
import pickIt from "./assets/pickItGif.gif";
import pickIt2 from "./assets/pickIt2Gif.gif";
import cccSite from "./assets/clothingSiteGif.gif";

//icons
import axios from "./assets/icons/axios-icon.png";
import css from "./assets/icons/css-icon.png";
import git from "./assets/icons/git-icon.png";
import html from "./assets/icons/html-icon.png";
import javascript from "./assets/icons/javascript-icon.png";
import json from "./assets/icons/json-icon.png";
import mongodb from "./assets/icons/mongodb-icon.png";
import node from "./assets/icons/node-icon.png";
import react from "./assets/icons/react-icon.png";
import terminal from "./assets/icons/terminal-icon.png";
import express from "./assets/icons/express-icon.png";

export default function Projects() {
  return (
    <div className="container">
      <header>
        <h1>What Can I Do?</h1>
      </header>
      <body>
        <h3>
          Here area few samples of what I am able to do. Go ahead and click on
          the gif if you would like to take a closer look.
        </h3>
        <a href="http://pick-it.surge.sh/" target="_blank" className="gif">
          <h1 className="projects">Pick-It</h1>
          <img className="size" src={pickIt} alt="" />
        </a>

        <p>
          This was the very first big project that we were assigned; a test at
          our front end skills. We had 10 days to complete this and I enjoyed
          this one the most. I was able to see what I could do with the new
          skills I’ve learned and combine them with my love to play the guitar.
        </p>
        <ul>
          <h4>Built with:</h4>
          <li className="fab">&#xf41b; React</li>
          <li className="fab">&#xf13b; HTML5</li>
          <li className="fab">&#xf13c; CSS3</li>
          <li className="fab">&#xf3b9; JavaScript</li>
          <li className="fab">&#xf419; Node.js</li>
        </ul>
        <a
          href="https://pick-it2.herokuapp.com"
          target="_blank"
          className="gif"
        >
          <h1 className="projects">PickIt v2</h1>
          <img className="size" src={pickIt2} alt="" />
        </a>

        <p>
          I enjoyed working on the first project so much, I decided to continue
          it. I started from scratch and was able to clean my code up a little
          and try a few different things. This is definitely one that I will
          continue to work on during my free time to see where I can take it. I
          have ideas of what I would like to add to it and develop it even more.
        </p>
        <ul>
          <h4>Built with:</h4>
          <li className="fab">&#xf41b; React</li>
          <li className="fab">&#xf13b; HTML5</li>
          <li className="fab">&#xf13c; CSS3</li>
          <li className="fab">&#xf3b9; JavaScript</li>
          <li className="fab">&#xf419; Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
        <a
          href="https://cursive-clothing.herokuapp.com/"
          target="_blank"
          className="gif"
        >
          <h1 className="projects">Cursive Clothing</h1>

          <img className="size" src={cccSite} alt="" />
        </a>

        <p>
          Cursive Clothing Company - This was our final project; it also is a
          full-stack application but we were required to have Authentication. We were given 8
          days and we had to work with a partner which made it more of a
          challenge. Both of us had different ways of interpreting information
          and how we approached it. This gave me a great learning experience
          with a team and true collaboration in our efforts to complete a
          project. It was a great learning experience and good practice for
          working in the real world, working in pairs or groups.
        </p>
        <ul>
          <h4>Built with:</h4>
          <li className="fab">&#xf41b; React</li>
          <li className="fab">&#xf13b; HTML5</li>
          <li className="fab">&#xf13c; CSS3</li>
          <li className="fab">&#xf3b9; JavaScript</li>
          <li className="fab">&#xf419; Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
        <p>
          I am proud of these projects and accomplishments I've achieved in
          these past few months. I began my journey with little to no knowledge
          of the coding world and finished with head full of new knowledge,
          ideas and tools to get me started. We had a deadline with all of these
          apps, averaging between 6-9 days to complete them. I am excited for
          the future and to see how much more I can grow and learn with these
          new skills that I've been taught.
        </p>

        <h6>What Do I Know?</h6>
        <div className="skills">
          <div className="icons">
            <img src={react} alt="" />
            <h5>React</h5>
          </div>
          <div className="icons">
            <img src={javascript} alt="" />
            <h5>JavaScript</h5>
          </div>
          <div className="icons">
            <img src={html} alt="" />
            <h5>HTML5</h5>
          </div>
          <div className="icons">
            <img src={css} alt="" />
            <h5>CSS3</h5>
          </div>
          <div className="icons">
            <img src={node} alt="" />
            <h5>Node.js</h5>
          </div>
          <div className="icons">
            <img src={json} alt="" />
            <h5>JSON</h5>
          </div>
          <div className="icons">
            <img src={terminal} alt="" />
            <h5>Terminal</h5>
          </div>
          <div className="icons">
            <img src={git} alt="" />
            <h5>Git</h5>
          </div>
          <div className="icons">
            <img src={express} alt="" />
            <h5>Express</h5>
          </div>
          <div className="icons">
            <img src={axios} alt="" />
            <h5>Axios</h5>
          </div>
          <div className="icons">
            <img src={mongodb} alt="" />
            <h5>MongoDB</h5>
          </div>
        </div>
      </body>
    </div>
  );
}
