import React from 'react';
import logo from './pizza_logo.png';
import './logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="" className="img-fluid rounded text-center" />
        </Link>
    );
}

export default Logo;
// <img src={logo} className="img-fluid" />
//import logo from './logo_main.png';