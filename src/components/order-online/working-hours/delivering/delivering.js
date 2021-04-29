import React from 'react';
import './delivering.css';

const Delivering = () => {
    return (
        <div className="text-center p-3">
            <div className="delivering__image">
                <span><i className="fa fa-truck fa-3x"></i></span>
            </div>
            <h3 className="delivering__heading my-3">
                DELIVERY HOURS
            </h3>
            <div className="delivering__content">
                <p className="my-1"> Monday: 10:30am – 9pm </p>
                <p className="my-1"> Tuesday – Saturday: 10:30am – 10pm </p>
                <p className="my-1"> Sunday: 12pm – 9pm </p>
            </div>
        </div>
    );
}

export default Delivering;