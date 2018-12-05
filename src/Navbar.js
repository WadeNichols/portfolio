import React, { Component } from "react";
import { Link } from "react-router-dom";

//my component


export default function Navbar() {
  return (
    <nav className='navbar-container'>
        <Link className='navbar' to={'/'}>Main</Link>
        <Link className='navbar' to={'/projects'}>Projects</Link>
        <Link className='navbar' to={'/about'}>About</Link>
    </nav>
  );
}
