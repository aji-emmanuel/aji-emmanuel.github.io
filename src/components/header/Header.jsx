import React from 'react';
import './header-style.css';
var logo = require('../../assets/img/logo.png');

function Header() {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
        <div>
            <a className="navbar-brand" href="#home">
                <img src={logo} alt='..emmanuel' />
            </a>
        </div>
        <div id='spacer' />
        <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#!">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Header;