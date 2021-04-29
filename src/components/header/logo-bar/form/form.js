import React from 'react';
import './form.css';
import { Link } from 'react-router-dom';

const Form = ({ totalNumberOrderedItems }) => {
    return (
        <div className="shadow-lg px-4 py-3 bg-white text-center border form__container">
            <span>
                <Link to="/authorization"><i className="fa fa-user fa-2x text-dark"></i></Link>
            </span>
            <span className="form__basket-icon">
                <Link to="/basket"><i className="fa fa-shopping-cart fa-2x pl-4 text-dark"></i></Link>
                { totalNumberOrderedItems ? <span className="form__basket-amount bg-dark rounded-circle">
                                                    { totalNumberOrderedItems }
                                                  </span>
                                                : null }
            </span>
            <span>
                <i className="fa fa-search fa-2x pl-4 text-dark"></i>
            </span>
        </div>
    );
}

export default Form;