import React from 'react';
import './order-online.css';
import PageHeaderInfo from './../page-headings/page-header-info';
import Delivering from './working-hours/delivering';
import Takingout from './working-hours/taking-out';
import PizzaCataloge from './pizza-cataloge';

const Orderonline = () => {
    return(
        <main>
            <PageHeaderInfo title="ORDER ONLINE" />
            <div className="bg-light rounded p-4">
                <div className="row border rounded p-3">
                    <div className="col-12 col-sm-6">
                        <Delivering />
                    </div>
                    <div className="col-12 col-sm-6">
                        <Takingout />
                    </div>
                </div>
            </div>
            <div className="text-center my-4">
                <PizzaCataloge />
            </div>
            <div className="text-center mb-4">
                <PizzaCataloge />
            </div>
        </main>
    );
}

export default Orderonline;