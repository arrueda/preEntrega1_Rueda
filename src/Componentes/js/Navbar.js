import React from 'react';
import '../css/navbar.css';

const Navbar = () => (
  <nav className='nav'>
    <ul className='navbar-menu'>
      <a href='#' className='navbar-menu-link'>Home</a>
      <a href='#' className='navbar-menu-link'>Comerciales</a>
      <a href='#' className='navbar-menu-link'>Exhibidoras</a>
      <a href='#' className='navbar-menu-link'>Freezers</a>
      <a href='#' className='navbar-menu-link'>Camara Figorificas</a>
    </ul>
  </nav>
);

export default Navbar;