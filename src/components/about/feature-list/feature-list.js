import React from 'react';
import './feature-list.css';
import Feature from './feature';
import featureImageFirst from './feature__image-first.jpg';
import featureImageSecond from './feature__image-second.jpg';
import featureImageThird from './feature__image-third.jpg';
import featureImageMain from './feature__image-main.jpg';

const Featurelist = () => {
    return (
        <div className="mt-5">
            <div className="text-center featurelist__heading">Considered the oldest family name in Chicago pizza, 
                Jino Biancalana’s is as rich in history as its pizza is in flavor.
            </div>
            <div className="row mt-5">
                <Feature image={featureImageFirst} />
                <Feature image={featureImageSecond} />
                <Feature image={featureImageThird} />
            </div>
            <div    style={{backgroundImage: `url(${featureImageMain})`,
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}} 
                    className="border rounded featureimage__container d-flex 
                                justify-content-center align-items-center mt-5">
                <div className="text-white featureimage__heading">
                    IN PIZZA WE TRUST
                </div>
            </div>
        </div>
    );
}

export default Featurelist;