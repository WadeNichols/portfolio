import React from "react";

import headShot from "./assets/portfolioPicture.png";

export default function About() {
  return (
    <div className="container">
      <header>
        <h1>Have You Met Wade?</h1>
      </header>
      <p className="head-shot">
        <img height="404px" width="300px" src={headShot} alt="" />
      </p>
      <body>
        <p>
          Hi, I'm Wade and this is the story of how I came to become a Web Developer.
        </p>
        <p>
          I decided it was time to find a career and I was lucky to find one I
          love doing. So, here is a snap shot of how I came to this point in my
          life and how you came to be reading this.
        </p>
        <p>
          A lot of my past work experience were jobs that just got me by. They
          were jobs such as paper routes, working in restaurants, customer
          service and, most recently, construction. None of these meant a whole
          lot to me. It's not that I hated any of the jobs or the work I did,
          but rather, I didn't have any passion for them and they were not the
          career I really wanted to be doing. I had them to pay the rent and get
          by month to month. I knew it was time to find a career I could enjoy
          and actually do well. Electronics, and what makes them work, were
          always something I was interested in. I realized my love of computers
          and what make them work, at a young age, when I purchased my first
          computer and found out about computer coding.
        </p>
        <p>
          Today, I am excited to begin this new journey doing something that
          gives me joy and challenges me daily. Graduating V-School is a major
          accomplishment. I'm proud of myself for being able to complete it. I
          learned valuable lessons in working alone and with others in a team
          environment on specific projects, excelling in both work arenas. I
          have discovered I truly enjoy the challenges the coding world can
          bring. I am eager to start working with a forward thinking company to
          grow with.
        </p>
        <p>
          Feel free to poke around my portfolio to see a little more of what I
          learned and can do.
        </p>
      </body>
    </div>
  );
}
