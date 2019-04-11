import React from 'react';
import '../style/index.css';
import '../style/camogreen.css';

const Header = () => {
    return (
    <header id="header">
        <h1><a href="URL">
            <img src={require('../assets/logo-sml.png')} className="logo" />
            </a>
        </h1>
        <nav id="nav">
            <ul>
                <li className="special">
                    <a href="URL" className="menuToggle">
                    <span>Menu</span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
)};

export default Header;