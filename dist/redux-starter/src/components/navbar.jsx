import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-wrapper red darken-3">
    <div className="d-flex justify-content-between align-items-center container">
      <Link to="/" className="text-white fs-30">My Apps</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/pizzas">Pizzas</NavLink>
        </li>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
