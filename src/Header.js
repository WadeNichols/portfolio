import React from "react";

import wadeLogo from './assets/wadeLogo.png'

function Header() {
  return (
    <div className="header">
      <img className="logoW" src={wadeLogo}/>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossorigin="anonymous"
      />

      {/* <h1 className="name">Wade Nichols</h1> */}
      <div className="header-icons">
        <a target="_blank" href="https://github.com/WadeNichols">
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
          href="https://www.linkedin.com/in/wade-nichols-9bb33a164/"
        >
          <i class="fab fa-linkedin" />
        </a>
      </div>
    </div>
  );
}


export default Header;