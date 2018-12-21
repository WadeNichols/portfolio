import React from "react";

import pickIt from "./assets/pickItGif.gif";
import pickIt2 from "./assets/pickIt2Gif.gif";
import cccSite from "./assets/clothingSiteGif.gif";

function Projects() {
  return (
    <div className="projects-container">
      <h1>What Can I Do?</h1>
      <p>
        Here are a few samples of what i learned during the 12 weeks that I was
        at V-School. If you would like to take a closer look then you can click
        on the gif and it will take you to the web page.
      </p>
      <p>
        I am proud of these projects that i made. By all means i am not saying
        that these are the best web pages ever created, unless you compare me to
        my nephew who is 7; They're pretty dang good compared to him. With all
        of the projects we were given anywhere from 6-8 days to complete and for
        me accomplishing it says a lot to me. I started V-School with very
        little about the coding world; i would of been able to recognize code
        but that would of been to the extent of my knowledge. I went from
        knowing nothing about the coding world to being able to create a full
        stack web application with only so many days. Coding isn't very easy,
        and it's definitely a challenge to learn in such a short time to cram so
        much information in. If i am able to achieve this then i know that, with
        the right opportunity to continue learning and practice more that i will
        become an even better developer than i am now.
      </p>
      <div className="gif-videos">
        <img width="320" height="179" src={pickIt} alt="" />
        <p className="">
          This was the very first project that we were assigned.
        </p>
        <img width="320" height="179" src={pickIt2} alt="" />
        <p>
          I enjoyed working on the first project so much that i decided to do it
          a second time from scratch. We had{" "}
        </p>
          <img width="320" height="179" src={cccSite} alt="" />
        <p>
          Cursive Clothing Company - This was our final project that was also fullstack but required us to have Authentication. We were given 8 days and we had to work with a partner which made it more of a challenge. Both of us had different ways of interpreting stuff and how we approached it which caused some rough patches in the beginning but was a great learning experience and practice for working in the real world and working in pairs or groups.
        </p>
      </div>
    </div>
  );
}

export default Projects;
