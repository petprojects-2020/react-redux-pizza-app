import React from 'react';
import './product-card.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const ProductCard = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="mb-3">
                <img src={ props.image } alt="" className="img-fluid border rounded" />
            </div>
            <a href="#" className="text-dark" onClick={() => {
                    props.history.push(`/products/${props.id}`);
                }}>
                <b>{ props.title }</b>
            </a>
            <div className="mt-1 product__description">
                { props.description }
            </div>
            <div className="mt-3 product__price">
                <div className="d-flex justify-content-between">
                    <div>
                        { props.pizzasize[0].size }
                    </div>
                    <div>
                        <b>${ props.pizzasize[0].price }</b>
                    </div>
                    <Link onClick={()=>props.onAddToCart({
                                    id: props.pizzasize[0].id,
                                    price: props.pizzasize[0].price,
                                    image: props.image,
                                    title: props.title,
                                    size: props.pizzasize[0].size
                                    })} to="/basket">
                        <button  className="btn btn__color">ORDER</button>
                    </Link>
                </div>
                <div className="d-flex justify-content-between mt-1">
                    <div>
                        { props.pizzasize[1].size }
                    </div>
                    <div>
                        <b>${ props.pizzasize[1].price }</b>
                    </div>
                    <Link onClick={()=>props.onAddToCart({
                                    id: props.pizzasize[1].id,
                                    price: props.pizzasize[1].price,
                                    image: props.image,
                                    title: props.title,
                                    size: props.pizzasize[1].size
                                    })} to="/basket">
                        <button  className="btn btn__color">ORDER</button>
                    </Link>
                </div>
            </div>
        </div> 
    );
}

export default withRouter(ProductCard);