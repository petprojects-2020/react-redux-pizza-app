import React, { useState } from 'react';
import './menu-bar.css';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(click => !click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="menu-bar__container navbar mt-3 rounded">
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa fa-times fa-2x' : 'fa fa-bars fa-2x'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item"><NavLink onClick={closeMobileMenu} className="nav-links text-white" activeClassName="active-link" exact to="/">HOME</NavLink></li>
                <li className="nav-item"><NavLink onClick={closeMobileMenu} className="nav-links text-white" activeClassName="active-link" to="/about">ABOUT PIZZA</NavLink></li>
                <li className="nav-item"><NavLink onClick={closeMobileMenu} className="nav-links text-white" activeClassName="active-link" to="/our-menu">OUR MENU</NavLink></li>
                <li className="nav-item"><NavLink onClick={closeMobileMenu} className="nav-links text-white" activeClassName="active-link" to="/order-online">ORDER ONLINE</NavLink></li>
                <li className="nav-item"><NavLink onClick={closeMobileMenu} className="nav-links text-white" activeClassName="active-link" to="/contacts">CONTACTS</NavLink></li>
            </ul>
        </nav>
    );
}

export default MenuBar;

