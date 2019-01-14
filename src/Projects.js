import React from "react";

import pickIt from "./assets/pickItGif.gif";
import pickIt2 from "./assets/pickIt2Gif.gif";
import cccSite from "./assets/clothingSiteGif.gif";
import pickItLogo from "./assets/pickItLogo.png";
import pickIt2Logo from "./assets/pickIt2Logo.png";
import cccLogo from "./assets/cccLogo.png";

function Projects() {
  return (
    <div className="container">
      <header>
        <h1>What Can I Do?</h1>
      </header>
      <body>
        <h3>
          Here are a few samples of what I learned during the 12 weeks that I
          was at V-School. If you would like to take a closer look then you can
          click on the gif and it will take you to the web page.
        </h3>
        <a href="http://pick-it.surge.sh/" target="_blank" className="gif">
          <img width="320" height="179" src={pickIt} alt="" />
        </a>
        {/* <img
          className="projects-logo"
          width="280px"
          height="260px"
          src={pickItLogo}
          alt=""
        /> */}
        <p>
          This was the very first big project that we were assigned; a test at
          our front end skills. We had 10 days to complete this and I enjoyed
          this one the most. I was able to see what I could do with the new
          skills I’ve learned and combine them with my love to play the guitar.
        </p>
        <a href="https://pick-it2.herokuapp.com" target="_blank" className="gif">
          <img width="320" height="179" src={pickIt2} alt="" />
        </a>
        {/* <img
          className="projects-logo"
          width="200px"
          height="200px"
          src={pickIt2Logo}
          alt=""
        /> */}
        <p>
          I enjoyed working on the first project so much, I decided to continue
          it. I started from scratch and was able to clean my code up a little
          and try a few different things. This is definitely one that I will
          continue to work on during my free time to see where I can take it. I
          have ideas of what I would like to add to it and develop it even more.
        </p>
        <a
          href="https://cursive-clothing.herokuapp.com/"
          target="_blank"
          className="gif"
        >
          <img width="320" height="179" src={cccSite} alt="" />
        </a>
        {/* <img
          className="projects-logo"
          width="280px"
          height="260px"
          src={cccLogo}
          alt=""
        /> */}
        <p>
          Cursive Clothing Company - This was our final project that was also
          full-stack but required us to have Authentication. We were given 8
          days and we had to work with a partner which made it more of a
          challenge. Both of us had different ways of interpreting information
          and how we approached it. This gave me a great learning experience
          with a team and true collaboration in our efforts to complete a
          project. It was a great learning experience and good practice for
          working in the real world, working in pairs or groups.
        </p>
        <p>
          I am proud of these projects that I made. By all means I am not saying
          that these are the best web pages ever created, unless you compare me
          to my nephew who is 7; then they’re pretty dang good compared to him.
          With all of the projects assigned to us, we were given anywhere from
          6-8 days to complete and for me to accomplish them says a lot for me.
          I started V-School with very little about the coding world; I would
          have been able to recognize code but that would have been to the
          extent of my knowledge. I went from knowing nothing about the coding
          world to being able to create a full stack web application. Coding
          isn't very easy, and it's definitely a challenge to learn so much
          material/information in such a short time to learn it in. Since I have
          achieved this, I know that with the right opportunity to continue
          learning and practice more, I will become an even better developer
          than I am now.
        </p>
      </body>
    </div>
  );
}

export default Projects;
