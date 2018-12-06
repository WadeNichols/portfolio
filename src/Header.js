import React from 'react'

function Header() {
    return (
        <div className='header'>
            <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'></link>
            <h1 className="name">Wade Nichols</h1>
            <p>8147 Weeping Willow Lane<br/>Sacramento, CA. 95828<br/></p>
            <a target="_blank" href="https://github.com/WadeNichols"><i className="fab fa-github"></i></a>
            <a target="_blank" type="email" href='mailto: wnichols73@gmail.com?&subject=Resume%20Request'><i class='fas fa-envelope'></i></a>
            <a href="https://www.linkedin.com/in/wade-nichols-9bb33a164/"><i class='fab fa-linkedin'></i></a>
        </div>

    )
}

export default Header
