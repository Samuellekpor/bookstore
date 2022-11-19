import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='NavBar-container'>
      <nav className='nav-bar'>
        <h1 className='logo'>Bookstore CMS</h1>
        <ul className='navLinks'>
          <li className='link'>
            <NavLink to='/'>Books</NavLink>
          </li>
          <li className='link'>
            <NavLink to='/categories'>Categories</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar