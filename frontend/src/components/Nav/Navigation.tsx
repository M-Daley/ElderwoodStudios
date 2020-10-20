import React from 'react';
import './css/Nav.css';

// images
import deer from './images/buck-logo.png';

export const Navigation: React.FC = () => (
    <section className="navigation">
        <div className="logo-container">
            <img src={deer} alt="Logo of a deer"/>
            <h2>Elderwood Studios</h2>
        </div>

        <ul className="nav-links">
            <li className="link">Contact</li>
            <li className="link">About</li>
            <li className="link"><a href="#Commission">Commission</a></li>
            <li className="link"><a href="#Gallery">Gallery</a></li>
            <li className="link"><a href="#Home">Home</a></li>
        </ul>
    </section>
);