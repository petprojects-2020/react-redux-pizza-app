import React, {Component} from 'react';
import './clients-orders.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from './../button';

class Clientsorders extends Component {

    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('https://pizza-project-7d42e.firebaseio.com/orders.json')
        .then(response => {
            const data = Object.values(response.data);
            this.setState({orders: data, loading: false});
        })
        .catch((error) => console.log(error));
    }

    render() {
        let loadedOrders;
        if(this.state.loading) {
            return loadedOrders = null;
        }
        loadedOrders = this.state.orders.map(order => {
            let { orderedPizza, orderPrice, orderedQuantity, 
                orderTime, orderNumber, orderDate } = order;
            return (
                <div key={ orderNumber } className="row text-center border rounded p-2">
                    <div className="col-3 col-sm-2 p-2">{ orderNumber }</div>
                    <div className="col-3 col-sm-3 p-2">{ orderDate} / {orderTime } </div>
                    <div className="col-3 col-sm-2 p-2">{ orderPrice }</div>
                    <div className="col-3  col-sm-2 p-2">{ orderedQuantity }</div>
                    <div className="d-none d-sm-block
                                    col-sm-3 text-left p-2">
                        { orderedPizza.map((item, idx) =>
                        <div key={ idx } className="p-1">{ item }</div>) }
                    </div>
                </div>
            )
        });
        return (
            <div>
                <div className="row mt-5">
                    <Link to="/" className="bread__crumbs-path">
                        <span>HOME</span>
                    </Link>
                    <span className="mx-1 bread__crumbs-path">/</span>
                    <span className="bread__crumbs-path">YOUR ORDERS</span>
                </div>
                <div className="row my-5" >
                    <div className="col-12 col-lg-9">
                        <div className="row text-center bg-light border rounded">
                            <div className="p-3 col-3 col-sm-2">
                                <strong>Order #</strong>
                            </div>
                            <div className="p-3 col-3 col-sm-3">
                                <strong>Date/Time</strong>
                            </div>
                            <div className="p-3 col-3 col-sm-2">
                                <strong>Total</strong>
                            </div>
                            <div className="p-3 col-3 col-sm-2">
                                <strong>Quantity</strong>
                            </div>
                            <div className="d-none d-sm-block p-3 col-sm-3">
                                <strong>Ordered Pizza</strong>
                            </div>
                        </div>
                        {loadedOrders}
                    </div>
                    <div className="col-12 col-lg-3 text-center">
                        <div className="text-center border rounded bg-light">
                            <div className="p-2">
                                <img src="http://placehold.it/100x100/" alt="#"
                                     className="rounded-circle"/>
                            </div>
                            <div className="p-2">userName</div>
                        </div>
                        <div className="my-4">Orders<strong className="ml-1">({this.state.orders.length})</strong></div>
                        <Link className="mt-2" to="/authorization">
                            <Button>Log out</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clientsorders;

