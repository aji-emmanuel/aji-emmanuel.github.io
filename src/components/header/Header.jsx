import React from 'react';
import './header-style.css';
var logo = require('../../assets/img/logo.png');

function Header() {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
        <a className="navbar-brand" href="#home">
            <img src={logo} alt='..emmanuel' />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Header;