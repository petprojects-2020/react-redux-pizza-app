import React from 'react';
import './basket.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../actions/cart';
import { Link } from 'react-router-dom';
import Button from './../button';

const Basket = ({ orderedItems, onDelete, onAddToCart, 
                  onDecrease, totalOrderPrice }) => {
    const renderRow = (item, idx) => {
        const { title, image, price, count, total, size } = item;
        return (
            <div key={ idx } className="row flex-column flex-sm-row justify-content-center
                                        justify-content-sm-between py-3 py-sm-5 align-items-center
                                        border-top border-bottom cart__item">
                <div className="col-1 order__delete text-center text-sm-left">
                    <i className="fa fa-trash fa-2x" onClick={()=>onDelete(item)}></i>
                </div>
                <div className="col-8 col-sm-3 order__image">
                    <img src={ image } alt="" className="img-fluid rounded" />
                </div>
                <div className="col-10 text-center text-sm-left col-sm-2 order__title__size">
                    <div>{ title }</div>
                    <div>size: <span>{ size }</span></div>
                </div>
                <div className="mt-2 mt-sm-0 col-3 d-sm-none d-md-block col-md-1 text-center order__price">
                    <b>${ price }</b>
                </div>
                <div className="col-6 mt-5 mt-sm-0 col-sm-3 col-md-2 order__quantity text-center">
                    <i className="fa fa-plus" onClick={()=>onAddToCart(item)}></i>
                        <span className="border rounded p-3 mx-2">{ count }</span>
                    <i className="fa fa-minus" onClick={()=>onDecrease(item)}></i>
                </div>
                <div className="col-3 mt-4 mt-sm-0 col-sm-1 col-md-2 order__total text-center">
                    <b>${ total }</b>
                </div>
            </div>
        );
    };
    return (
        <div>
            <div className="cart__heading mt-5">
                <Link to="/" className="text-dark mt-4">
                    <span>HOME</span>
                </Link>
                <span className="mx-1">/</span>
                <span>CART</span>
                <h2 className="orderonline__heading mt-1">CART</h2>
            </div>
            <div className="row align-items-top my-5">
                <div className="col-12 col-xl-8 order__data">
                    {orderedItems.map(renderRow)}
                </div>
                <div className="col-12 col-xl-4 py-2 px-4 bg-light basket__total border rounded">
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
                        <b className="w-25 text-right">{ totalOrderPrice }$</b>
                    </div>
                    <Link to="/checkout"> 
                        <Button className="my-3">
                            Proceed to checkout
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ cart }) => ({
    orderedItems: cart.cartItems,
    totalOrderPrice: cart.orderTotal
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);