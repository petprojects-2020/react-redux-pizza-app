import React from 'react';
import { Link } from 'react-router-dom';
import './product-component.css';
import Button from '../button';

const ProductComponent = (props) => {
    const pizzasizeOriginal = Object.values(props.pizzasize);
    const pizzaSizes = pizzasizeOriginal.map((item, index) => {
        return (
            <div key={ index }> 
                <button  className="border p-3" onClick={() => props.buttonSizeHandler(item)}>
                    { item.size }
                </button>
                <div className="text-center border p-3">${ item.price }</div>
            </div>
        )
    });
    let { title, image, chosedPizzaSize, onAddToCart, handleOrderBtn, sizePizzaHint } = props;
    let defaultOrderBtn = <button onClick={ handleOrderBtn } className="btn btn-lg btn__color my-4">
                        ORDER</button>;
    if(chosedPizzaSize) {
        defaultOrderBtn = <Link onClick = {() => onAddToCart({
                                            id: chosedPizzaSize.id,
                                            price: chosedPizzaSize.price,
                                            image,
                                            title,
                                            size: chosedPizzaSize.size
                                        })} to="/basket">
        <Button className="my-4">ORDER</Button></Link>
    }
    return (
        <div>
            <div className="row mt-5">
                <Link to="/" className="bread__crumbs-path">
                    <span>HOME</span>
                </Link>
                <span className="mx-1 bread__crumbs-path">/</span>
                <Link to="/order-online" className="bread__crumbs-path">
                    <span>PIZZA</span>
                </Link>
                <span className="mx-1 bread__crumbs-path">/</span>
                <span className="bread__crumbs-item text-uppercase">{ props.title }</span>
            </div>
            <div className="row productCard mb-5 text-center text-md-left">
                <div className="productCard__image col-12 col-md-6 p-5">
                    <img src={ props.image } alt="" className="img-fluid" />
                </div>
                <div className="productCard__content col-12 col-md-6">
                    <h2 className="my-3 productCard__content-title">{ props.title }</h2>
                    <p className="my-3 productCard__content-description">{ props.description }</p>
                    <div className="product__description d-flex justify-content-center justify-content-md-start my-2">
                        <div className="product__description-item p-1 border">
                            <div className="p-2 border-bottom">
                                <div>ENERGY</div>
                                <div>490 CAL</div>
                            </div>
                            <div className="p-2 text-center">
                                <div>DI*</div>
                                <div>25%</div>
                            </div>
                        </div>
                        <div className="product__description-item p-1 border">
                            <div className="p-2 text-center border-bottom">
                                <div>PROTEIN</div>
                                <div>29 g</div>
                            </div>
                            <div className="p-2 text-center">
                                <div>DI*</div>
                                <div>58%</div>
                            </div>
                        </div>
                        <div className="product__description-item p-1 border">
                            <div className="p-2 border-bottom">
                                <div>FAT</div>
                                <div>14 g</div>
                            </div>
                            <div className="p-2 text-center">
                                <div>DI*</div>
                                <div>18%</div>
                            </div>
                        </div>
                    </div>
                    <p className="product__description-diet">*DI: Recommended Daily Intake based on 2000 calories diet</p>
                    <p>Allergens: Milk, Eggs, Soy</p>
                    <div className="product__size d-flex justify-content-center justify-content-md-start">
                        { pizzaSizes }
                        { sizePizzaHint ?   <span className="border border-danger
                                                            rounded h-25 ml-2 p-2">
                                            Choose pizza size, please</span>
                                        :   null }
                    </div>
                    { defaultOrderBtn }
                </div>
            </div>
        </div>
    );
}

export default ProductComponent;

