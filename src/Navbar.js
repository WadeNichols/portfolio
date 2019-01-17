import React from 'react'

export default function Navbar() {
    return (
        <div>
        <nav className="nav-container">
          <a className="nav" href="/">About</a>
          <a className="nav" href="/projects">Projects</a>
          <a className="nav" href="/resume">Resume</a>
        </nav>
        </div>
    )
}