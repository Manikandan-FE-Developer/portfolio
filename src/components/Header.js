import React, { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button className="navbar-toggle" onClick={toggleMenu}>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="head">
                        <img className="logo" src="images/logo.png" alt="Logo" />
                        <p className="name">Portfolio</p>
                    </div>
                </div>
                <div className={`collapse navbar-collapse ${menuOpen ? 'in' : ''}`}>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#home" onClick={closeMenu}>Home</a></li>
                        <li className="dropdown">
                            <a href="#about" className="dropdown-toggle" data-toggle="dropdown">About <span className="caret"></span></a>
                            <ul className="dropdown-menu navbar-inverse">
                                <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                                <li><a href="#project" onClick={closeMenu}>Project</a></li>
                                <li><a href="#skill" onClick={closeMenu}>Skills</a></li>
                                <li><a href="#education" onClick={closeMenu}>Education</a></li>
                                <li><a href="#certification" onClick={closeMenu}>Certification</a></li>
                            </ul>
                        </li>
                        <li><a href="#services" onClick={closeMenu}>Services</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
