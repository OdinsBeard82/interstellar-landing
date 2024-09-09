import React from 'react';
import './Header.css'; // Make sure the path to Header.css is correct

const Header = () => {
    return (
        <header className="App-header">
            <div className="navbar">
                <img src="https://your-logo-url.png" alt="Logo" className="logo" />
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#movies">Movies</a></li>
                        <li><a href="#series">Series</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
