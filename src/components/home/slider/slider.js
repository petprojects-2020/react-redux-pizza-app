import React from 'react';
import './slider.css';
import slider from './main_slider_img.jpg';
import { Link } from 'react-router-dom';
import Button from './../../button';

const Slider = () => {
    return (
        <div    style={{backgroundImage: `url(${slider})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}
                className="d-flex slider justify-content-center align-items-center">
            <div className="d-flex flex-column 
                            align-items-center">
                <h5 className="slider__heading-subtitle text-white">LEGENDARY</h5>
                <h3 className="slider__heading-title text-white">CHICAGO DEEP DISH</h3>
                <div className="slider__heading-description text-white">
                    With a more “contemporary” style, our gourmet pizzas are where
                    the creativity of our pizza chefs shines.
                </div>
                <Link to="/order-online">
                    <Button className="mt-3">START MY ORDER</Button>
                </Link>
            </div>
        </div>
    );
}

export default Slider;