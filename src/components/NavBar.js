import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

function NavBar() {
  return (
    <div className="navBar-container">
      <nav className="nav-bar">
        <h1 className="logo">Bookstore CMS</h1>
        <ul className="navLinks">
          <li className="link">
            <NavLink to="/">Books</NavLink>
          </li>
          <li className="link">
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
        <button type="button" className="profilButton">
          <AiOutlineUser />
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
