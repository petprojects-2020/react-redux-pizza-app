import React from 'react';
import './our-menu.css';
import PageHeader from './../page-headings/page-header';
import CatalogeList from './catalog-list';
import backgroundImage from './menu__image.jpg';

const Ourmenu = () => {
    return (
        <main>
            <PageHeader title="OUR MENU" backgroundImage={ backgroundImage }/>
            <CatalogeList heading="LEGENDARY DEEP DISH"/>
            <CatalogeList heading="THIN CRUST PIZZA" background="bg-dark"/>
            <CatalogeList heading="STUFFED CRUST PIZZA"/>
        </main>
    );
}

export default Ourmenu;