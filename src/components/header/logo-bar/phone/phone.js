import React from 'react';
import './phone.css';

const Phone = () => {
    return (
        <div className="shadow-lg bg-white py-1 d-flex flex-column
                        align-items-center border phone__container">
            <span>Order online or Call now</span>
            <div>
                <i className="fa fa-phone fa-2x"></i>
                <span className="phone__number ml-2">555-734-2581</span>
            </div>
        </div>
    );
}

export default Phone;