import React, { useState, useEffect } from'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [projectOffset, setProjectOffset] = useState(-70);

    useEffect(() => {
        const handleResize = () => {
            if ((window.innerWidth >= 321) && (window.innerWidth <= 932)) {
                setProjectOffset(-100);
            } else {
                setProjectOffset(-187);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [contactOffset, setContactOffset] = useState(-70);

    useEffect(() => {
        const handleResize = () => {
            if ((window.innerWidth >= 376) && (window.innerWidth <= 483)) {
                setContactOffset(-117);
            } else if ((window.innerWidth >= 667) && (window.innerWidth <= 932)) {
                setContactOffset(-108);
            } else {
                setContactOffset(-113);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <Link to='/' className='logo-container' smooth={true} offset={-2000} duration={1000}>
                    <img src={logo} alt='logo' className='logo' />
                </Link>
                

                <div className='menu'>
                    <Link to='/' className='menuItem' activeClass='active' smooth={true} offset={-2000} duration={1000}>Home</Link>
                    <Link to='Projects' className='menuItem' activeClass='active' smooth={true} offset={projectOffset} duration={1000}>Projects</Link>
                    <Link to='Contact' className='menuItem' activeClass='active' smooth={true} offset={contactOffset} duration={1000}>Contact</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;