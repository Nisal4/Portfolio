import React from'react';
import './navbar.css';
import logo from '../../assets/logo.png';
// import { Link } from 'react-scroll';
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <img src={logo} alt='logo' className='logo' />

                <div className='menu'>
                    <Router>
                        <Link to='/' className='menuItem'>Home</Link>
                        <Link to='Projects' className='menuItem'>Projects</Link>
                        <Link to='Contact' className='menuItem'>Contact</Link>
                    </Router>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;