import React from 'react';
import './logo-bar.css';
import Phone from './phone';
import Logo from './logo';
import Form from './form';
import { connect } from 'react-redux';

const LogoBar = (props) => {
    return (
        <div className="row flex-column flex-md-row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-10 col-sm-7 col-md-4 col-lg-3 mt-2"><Phone/></div>
            <div className="col-8 col-sm-5 col-md-4 my-3 text-center"><Logo/></div>
            <div className="d-none d-md-block col-md-4 col-lg-3"><Form totalNumberOrderedItems={props.totalNumberOrderedItems}/></div>
        </div>
    );
}

const mapStateToProps = ({ cart }) => ({
    totalNumberOrderedItems: cart.cartItems.reduce((total, item) => total + item.count, 0)
});

export default connect(mapStateToProps)(LogoBar);