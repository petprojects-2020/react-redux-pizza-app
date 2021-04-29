import React, { Component } from 'react';
import './checkout.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from './../../actions/cart';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './error'; 
import { Link } from 'react-router-dom';
import Button from './../button';


class Checkout extends Component {

    state = {
        isOrderSend: false
    }

    checkingStatus = (response) => {
        if(response.status === 200) {
            this.setState({ isOrderSend: true });
            this.props.clearBasket();
        }
    }

    orderButtonHandler = (orderData) => {
        const { totalOrderPrice, totalNumberOrderedItems, orderedItems } = this.props;
        if(totalNumberOrderedItems) {
            let orderedPizza = orderedItems.map(el => el.title);
            let orderPrice = totalOrderPrice;
            let orderedQuantity = totalNumberOrderedItems;
            let orderDate = new Date().toLocaleDateString();
            let orderTime = new Date().toLocaleTimeString();
            let orderNumber = Math.floor(Math.random() * 10001);
            const order = {
                orderedPizza,
                orderPrice,
                orderedQuantity,
                orderDate,
                orderTime,
                orderNumber,
                userName: orderData.name
            }
            axios.post('https://pizza-project-7d42e.firebaseio.com/orders.json', order)
                .then((response) => this.checkingStatus(response))
                .catch(error => console.log(error));
        }

    }

    render() {
        const {totalOrderPrice} = this.props;
        if(this.state.isOrderSend) {
            return <Redirect to="/thankyoupage"></Redirect>
        }
        const validationSchema = Yup.object().shape({
            name: Yup.string()
                .min(2, "Must have at least 2 characters")
                .max(30, "Must be shorter than 30")
                .required("Must enter a name"),
            city: Yup.string()
                .min(2, "Must have at least 2 characters")
                .max(30, "Must be shorter than 30")
                .required("Must enter a city"),
            phone: Yup.string()
                .min(2, "Must have at least 2 characters")
                .max(30, "Must be shorter than 30")
                .required("Must enter a phone"),           
            email: Yup.string()
                .email("Must be a valid email address")
                .max(30, "Must be shorter than 30")
                .required("Must enter an email")            
        });

        return (
            <div className="text-left my-5">
                <div className="checkout__heading mb-5">
                    <Link to="/" className="text-dark">
                        <span>HOME</span>
                    </Link>
                    <span className="mx-1">/</span>
                    <span>CHECKOUT</span>
                    <h2 className="orderonline__heading mt-1">CHECKOUT</h2>
                </div>
                <div className="row">
                    <Formik 
                        initialValues={{ name: "", email: "", phone: "", city: "" }}
                        validationSchema={ validationSchema }
                        onSubmit={ (values, { setSubmitting, resetForm }) => {
                            this.orderButtonHandler(values);
                            resetForm();
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, 
                            handleSubmit, isSubmitting, setFieldValue }) =>
                            (<form onSubmit={handleSubmit} 
                                   className="col-12 col-lg-8 billing__details
                                              border rounded">
                                <div className="row">
                                    <div className="form-group col-12 col-md-6">
                                        <label htmlFor="name">NAME</label>
                                        <input  
                                            onChange={ handleChange } 
                                            onBlur={ handleBlur }
                                            value={ values.name }
                                            type="text" 
                                            className="form-control"
                                            name="name" 
                                            id="name"
                                        />
                                        <Error touched={ touched.name }
                                               message={ errors.name }/>
                                    </div>
                                    <div className="form-group form-group col">
                                        <label htmlFor="email">EMAIL</label>
                                        <input  
                                            onChange={ handleChange } 
                                            onBlur={ handleBlur }
                                            value={ values.email }
                                            type="email" 
                                            className="form-control"
                                            name="email" 
                                            id="email"
                                        />
                                        <Error touched={ touched.email }
                                               message={ errors.email }/>                                </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12 col-md-6">
                                        <label htmlFor="city">CITY</label>
                                        <input 
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            value={ values.city } 
                                            type="text" 
                                            className="form-control"
                                            name="city"   
                                            id="city"
                                        />
                                        <Error touched={ touched.city }
                                               message={ errors.city }/>
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="phone">PHONE</label>
                                        <input  
                                            onChange={ handleChange }
                                            onBlur={ handleBlur }
                                            value={ values.phone } 
                                            type="text" 
                                            className="form-control"
                                            name="phone"  
                                            id="phone"
                                        />
                                        <Error touched={ touched.phone }
                                               message={ errors.phone }/>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <Button disabled={ isSubmitting } 
                                            type="submit" className="my-4">
                                        Place order
                                    </Button>
                                </div>
                            </form>)
                        }
                    </Formik>
                    <div className="col-12 col-lg-4 py-2 px-4 bg-light basket__total border rounded">
                        <h4 className="py-2">ORDER SUMMARY</h4>
                        <div className="subtotal border-bottom py-3 d-flex">
                            <span className="w-75">Order Subtotal</span>
                            <span className="w-25 text-right">{ totalOrderPrice }$</span>
                        </div>
                        <div className="shipping border-bottom py-3 d-flex">
                            <span className="w-75">Shipping and handling</span>
                            <span className="w-25 text-right">free</span>
                        </div>
                        <div className="total py-3 d-flex">
                            <span className="w-75">Total</span>
                            <strong className="w-25 text-right">{ totalOrderPrice }$</strong>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ cart }) => ({
    totalNumberOrderedItems: cart.cartItems.reduce((total, item) => total + item.count, 0),
    orderedItems: cart.cartItems,
    totalOrderPrice: cart.orderTotal
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
