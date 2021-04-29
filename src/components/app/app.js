import React, { Component } from 'react';
import './app.css';
import Header from './../header';
import Footer from './../footer';
import About from './../about';
import Home from './../home';
import Orderonline from './../order-online';
import Ourmenu from './../our-menu';
import Contact from './../contacts';
import Product from './../product';
import Basket from './../basket';
import Checkout from './../checkout';
import Authorization from './../authorization';
import Clientsorders from './../clients-orders';
import ThankYouPage from './../thank-you-page';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions/data-downloading';
import axios from 'axios';

class App extends Component {
    
    componentDidMount() {
        axios.get('https://pizza-project-7d42e.firebaseio.com/products.json')
            .then(response => {
                const data = Object.values(response.data);
                this.props.onInit(data);
            })
            .catch(error => {
                this.props.setDataFailed();
         });
    }

    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/about" component={ About } />
                        <Route path="/our-menu" component={ Ourmenu } />
                        <Route path="/order-online" component={ Orderonline } />
                        <Route path="/contacts" component={ Contact } />
                        <Route path="/product" component={ Product } />
                        <Route path="/basket" component={ Basket } />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/authorization" component={ Authorization } />
                        <Route path="/thankyoupage" component={ ThankYouPage } />
                        <Route path="/clientsorders" component={ Clientsorders } />
                        <Route path="/products/:id" 
                            render={({ match })=> { 
                                const { id } = match.params;
                                const { pizzaItems } = this.props;
                                if(!pizzaItems) {
                                    return <Redirect to="/"></Redirect>
                                }
                                const chosedPizza = pizzaItems.find(item => item.id === +id);
                                return <Product itemId={id} {...chosedPizza}/>
                            }}/>
                        <Orderonline/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    pizzaItems: state.datadownloading.pizzas
});

const mapDispatchToProps = dispatch => ({
    onInit: (arr) => dispatch(actions.setData(arr)),
    setDataFailed: () => dispatch(actions.setDataFailed)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
