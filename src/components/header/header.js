import React from 'react';
import './header.css';
import LogoBar from './logo-bar';
import MenuBar from './menu-bar';

const Header = () => {
    return (
        <header>
            <LogoBar/>
            <MenuBar/>
        </header>
    );
}

export default Header;