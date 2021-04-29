import React from 'react';
import './feature.css';

const Feature = ({image}) => {
    return (
        <div className="col-12 col-md-4 mb-3">
            <div>
                <img src={image} alt="" className="img-fluid rounded" />
            </div>
            <div className="mt-3 feature__item">
                Spicy jalapeno bacon ipsum dolor amet jowl brisket burgdoggen, 
                meatball bresaola bacon boudin tri-tip pig pork 
                fatback pork chop prosciutto short ribs.
            </div>
        </div>
    );
}

export default Feature;