import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../actions/cart';
import ProductComponent from './product-component';
import { withRouter } from 'react-router-dom';

class ProductContainer extends Component {

    state = {
        chosedPizzaSize: null,
        sizePizzaHint: false
    }

    buttonSizeHandler = (obj) => {
        this.setState({ chosedPizzaSize: obj })
        this.setState({ sizePizzaHint: false })
    }

    handleOrderBtn = () => {
        this.setState({ sizePizzaHint: true })
    }

    render() {
        const { image, id, title, description, 
                pizzasize, onAddToCart } = this.props;
        return (
            <div>
                <ProductComponent 
                    image = { image }
                    id = { id }
                    title = { title }
                    description = { description }
                    pizzasize = { pizzasize }
                    onAddToCart = { onAddToCart }
                    buttonSizeHandler = { this.buttonSizeHandler }
                    chosedPizzaSize = { this.state.chosedPizzaSize }
                    sizePizzaHint = { this.state.sizePizzaHint }
                    handleOrderBtn = { this.handleOrderBtn }
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
});

export default withRouter(connect(null, mapDispatchToProps)(ProductContainer));
