import React from 'react'
import {Link} from "react-router-dom";
import Logo from '../../asset/logo.svg';
// import './navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/" className='logo'> <img src={Logo} height={40} alt="logo" /></Link>
      <nav className='nav'> 
        <ul>
          <li>Favorites</li>
          <li>EN-Rs</li>
          <li>Login</li>
          <li>Menu 
            {/* <ul>
              <li>Recently-viewed</li>
              <li>Help and Support</li>
            </ul> */}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
