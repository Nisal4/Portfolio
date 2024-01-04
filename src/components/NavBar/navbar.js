import React from'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from'react-scroll';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <img src={logo} alt='logo' className='logo' />

                <div className='menu'>
                    <Link to='/' className='menuItem'>Home</Link>
                    <Link to='Projects' className='menuItem'>Projects</Link>
                    <Link to='Contact' className='menuItem'>Contact</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;