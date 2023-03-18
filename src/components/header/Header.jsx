import React, { useState, useEffect } from 'react';
import './header-style.css';
const logo = require('../../assets/img/logo.png');

function Header({isDark}) {
    const [activeTab, setActiveTab] = useState("home");
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

  return (
    <nav className={isDark? "navbar dark navbar-expand-md fixed-top" : "navbar navbar-expand-md fixed-top"}>
        <a className="navbar-brand" href="#home">
            <img src={logo} alt='..emmanuel' />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
                <li className={activeTab === "home" ? "nav-item active" : "nav-item"}>
                    <a className="nav-link" href="#home" onClick={() => handleTabClick("home")}>Home</a>
                </li>
                <li className={activeTab === "skills" ? "nav-item active" : "nav-item"}>
                    <a className="nav-link" href="#skillScroll" onClick={() => handleTabClick("skills")}>Skills</a>
                </li>
                <li className={activeTab === "projects" ? "nav-item active" : "nav-item"}>
                    <a className="nav-link" href="#projectScroll" onClick={() => handleTabClick("projects")}>Projects</a>
                </li>
                <li className={activeTab === "about" ? "nav-item active" : "nav-item"}>
                    <a className="nav-link" href="#aboutScroll" onClick={() => handleTabClick("about")}>About</a>
                </li>
                <li className={activeTab === "contact" ? "nav-item active" : "nav-item"}>
                    <a className="nav-link"href="#contactScroll" onClick={() => handleTabClick("contact")}>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Header;