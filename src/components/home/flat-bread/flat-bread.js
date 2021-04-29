import React from 'react';
import './flat-bread.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from './../../../actions/cart';
import ProductCard from './../../product-card';

const Flatbread = ({ pizzaItems, onAddToCart }) => {
    if(!pizzaItems){
        return "Загрузка"
    } 
    const pizzaDownloadedList = pizzaItems;
    pizzaDownloadedList.forEach(element => {
        let sizes = Object.values(element.pizzasize);
        element.pizzasize = sizes;
    }); 
    const pizzaList = pizzaDownloadedList.map((item) => {
        let { description, id, image, pizzasize, title } = item;
            return <ProductCard 
                        item = { item }
                        key= { id }
                        id = { id }
                        description = { description }
                        image = { image }
                        pizzasize = { pizzasize }
                        title = { title }
                        onAddToCart = { onAddToCart }
                    />
    });
    return(
        <div className="mt-5 text-center">
            <h2 className="flatbread__heading">FLATBREAD PIZZAS</h2>
            <p className="flatbread__subheading">With a more “contemporary” style, our gourmet pizzas are where
            the creativity of our pizza chefs shines.</p>
            <div className="row mt-4">
                {pizzaList}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    pizzaItems: state.datadownloading.pizzas
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Flatbread);



   