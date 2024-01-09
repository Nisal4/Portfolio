import React from'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <Link to='/' className='logo-container' smooth={true} offset={-300} duration={1000}>
                    <img src={logo} alt='logo' className='logo' />
                </Link>
                

                <div className='menu'>
                    <Link to='/' className='menuItem' activeClass='active' smooth={true} offset={-300} duration={1000}>Home</Link>
                    <Link to='Projects' className='menuItem' activeClass='active' smooth={true} offset={-187} duration={1000}>Projects</Link>
                    <Link to='Contact' className='menuItem' activeClass='active' smooth={true} duration={1000}>Contact</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;