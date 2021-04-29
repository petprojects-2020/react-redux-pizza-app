import React from 'react';
import './special.css';
import specialImage from './special__image.jpg';

const Special = () => {
    return (
        <div className="mt-5">
            <div className="special__heading">What makes Pizza™ so special?</div>
            <div className="row">
                <div className="col-12 col-md-4 mt-4">
                    <div className="special__subheading mb-3">Success comes from our
                        commitment to quality</div>
                    <div>
                        <img src={specialImage} alt="" className="img-fluid rounded" />
                    </div>
                </div>
                <div className="col-12 col-md-4 mt-4">
                    <div className="special__content-heading">We hand select California 
                        vine-ripened tomatoes for the perfect sweet-tangy taste</div>
                    <div className="special__content mt-3">
                        Spicy jalapeno bacon ipsum dolor amet jowl brisket burgdoggen, 
                        meatball bresaola bacon boudin tri-tip pig pork fatback pork chop prosciutto short ribs.
                    </div>
                </div>
                <div className="col-12 col-md-4 mt-4">
                    <div className="special__content-heading">Fresh mozzarella comes 
                        from the same dairy that has supplied us for 40 years</div>
                    <div className="special__content mt-3">
                        Spicy jalapeno bacon ipsum dolor amet jowl brisket burgdoggen, meatball 
                        bresaola bacon boudin tri-tip pig pork fatback pork chop prosciutto short ribs.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Special;