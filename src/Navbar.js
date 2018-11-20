import React, { Component } from "react";
import { Link } from "react-router-dom";

//my component


export default function Navbar() {
  return (
    <nav className='navbar-container'>
        <Link className='navbar' to={'/about'}>About<br/>Main<br/>Projects</Link>
        {/* <Link className='navbar' to={'/'}>Main</Link> */}
        {/* <Link className='navbar' to={'/projects'}>Projects</Link> */}
    </nav>
  );
}
