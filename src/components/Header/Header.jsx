import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/review">order review</Link>
            <Link to="/grandpa">grandpa</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
        </nav>
    );
};

export default Header;