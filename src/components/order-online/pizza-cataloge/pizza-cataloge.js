import React from 'react';
import * as cartActions from '../../../actions/cart';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductCard from '../../product-card';

const PizzaCataloge = ({ pizzaItems, onAddToCart }) => {
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
        <div className="row mt-4">
            { pizzaList }
        </div>
    );
}

const mapStateToProps = (state) => ({
    pizzaItems: state.datadownloading.pizzas
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCataloge);