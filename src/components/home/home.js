import React from 'react';
import './home.css';
import Slider from './slider';
import Locations from './locations';
import Bestselling from './best-selling';
import Brandimage from './brand-image';
import Flatbread from './flat-bread';

const Home = () => {
    return (
        <main>
            <Slider />
            <Locations />
            <Bestselling />
            <Brandimage />
            <Flatbread />
        </main>
    );
}

export default Home;
