import React from 'react';
import './person.css';

const Person = ({image}) => {
    return (
        <div className="col-12 col-md-4">
            <div>
                <img src={image} alt="" className="img-fluid rounded" />
            </div>
            <div className="person__content my-3">
                Spicy jalapeno bacon ipsum dolor amet jowl brisket burgdoggen, 
                meatball bresaola bacon boudin tri-tip pig pork 
                fatback pork chop prosciutto short ribs.
            </div>
        </div>
    );
}

export default Person;