import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
    return (
        <div>
            <div className="text-center my-5">
                <Link to="/" className="text-dark">
                    <span>HOME</span>
                </Link>
                <span className="mx-1">/</span>
                <span>ORDER CONFIRMATION</span>
                <h1 className="orderonline__heading mt-1">Thanks!</h1>
            </div>
            <div className="row justify-content-center text-center">
                <h2>We hope you enjoy your purchase</h2>
            </div>
        </div>
    );
}

export default ThankYouPage;