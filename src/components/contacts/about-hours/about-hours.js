import React from 'react';
import './about-hours.css';

const Abouthours = () => {
    return (
        <div className="mb-4 text-center text-md-left">
            <div className="about__section">
                <div>About Pizza</div>
                <p className="my-1">PO Box 61000 Sumskaya Street,</p>
                <p className="my-1">Kharkov, Ukraine</p>
                <p className="my-1">Phone: +38.3.8476.6487</p>
                <p className="mb-3">Email: order@pizzaapp.com</p>
            </div>
            <div className="hours__section">
                <div className="hours__section-dinein bg-light border rounded pl-2 my-2">
                    <div className="my-3 hours__section-heading"> Dine-in Hours </div>
                    <p>Mon.: 10:30am – 9pm</p>
                    <p>Tue. – Sat.: 10:30am – 10pm</p>
                    <p>Sun.: 12pm – 9pm</p>
                </div>
                <div className="hours__section-delivery bg-light border rounded pl-2 my-2">
                    <div className="my-3 hours__section-heading"> Delivery Hours </div>
                    <p>Mon.: 10:30am – 9pm</p>
                    <p>Tue. – Sat.: 10:30am – 10pm</p>
                    <p>Sun.: 12pm – 9pm</p>
                </div>
                <div className="hours__section-takein bg-light border rounded pl-2 my-2">
                    <div className="my-3 hours__section-heading"> Take-in Hours </div>
                    <p>Mon.: 10:30am – 9pm</p>
                    <p>Tue. – Sat.: 10:30am – 10pm</p>
                    <p>Sun.: 12pm – 9pm</p>
                </div>
            </div>
        </div>
    );
}

export default Abouthours;