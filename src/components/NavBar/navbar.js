import React from'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import { Link } from'react-scroll';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo' />
            
            <div className='menu'>
                <Link className='menuItem'>Home</Link>
                <Link className='menuItem'>About</Link>
                <Link className='menuItem'>Projects</Link>
                <Link className='menuItem'>Contact</Link>
            </div>

            <button className='contactBtn'>Contact Me</button>
        </nav>
    )
}

export default NavBar;