import React from 'react';
import './cataloge-list.css';
import menuList from './../../pizza-data/menu-data';

const CatalogeList = (props) => {

    const menuItems = menuList.map((item, idx) => {
        return (
            <div key={ idx } className="col-12 col-sm-6 my-3">
                <div className="d-flex justify-content-between py-2 border-bottom">
                    <div>
                        <strong>{ item.title }</strong>
                        <span className="ml-2">
                            &#8960;{ item.diam1 }/{ item.weight1 }g
                        </span>
                    </div>
                    <div>
                        <strong>{ item.price1 }$</strong>
                    </div>
                </div>
                <div className="text-left">
                    { item.description }
                </div>
                <div className="d-flex">
                    <div>
                        &#8960;{ item.diam2 }/{ item.weight2 }g
                        <span className="ml-2">
                            { item.price2 }$
                        </span>
                    </div>
                    <div className="ml-3">
                        &#8960;{ item.diam3 }/{ item.weight3 }g
                        <span className="ml-2">
                            { item.price3 }$
                        </span>
                    </div>
                </div>
            </div>
        );
    });

    if(props.background) {
        return (
            <div>
                <div className="text-center mt-5 bg-dark p-2 rounded">
                    <h2 className="text-white catalog__heading">{ props.heading }</h2>
                    <div className="text-white catalog__subheading">
                        Chicago-style deep dish pizza is the heartiest of the pizza varieties and typically 
                        eaten with a knife and fork. The dough is patted out by hand and raised up 
                        high on the sides of a seasoned deep dish pizza pan.
                    </div>
                    <div className="row text-white mt-3">
                        { menuItems }
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <div className="text-center mt-5">
                    <h2 className="catalog__heading">{ props.heading }</h2>
                    <div className="catalog__subheading"> 
                        Chicago-style deep dish pizza is the heartiest of the pizza varieties and typically 
                        eaten with a knife and fork. The dough is patted out by hand and raised up 
                        high on the sides of a seasoned deep dish pizza pan.
                    </div>
                    <div className="row mt-3">
                        { menuItems }
                    </div>
                </div>
            </div>
        );
    }
};

export default CatalogeList;