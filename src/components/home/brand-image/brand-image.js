import React from 'react';
import pizzaImage from './pizza_image.jpg';
import './brand-image.css';

const Brandimage = () => {
    return (
        <div style={{backgroundImage: `url(${pizzaImage})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}
            className="border rounded brandimage__container d-flex 
                      justify-content-center align-items-center my-5">
                <div className="text-white brandimage__heading">IN PIZZA WE TRUST</div>
        </div>
    );
}

export default Brandimage;