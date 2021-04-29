import React from 'react';
import './page-header-info.css';
import {Link} from 'react-router-dom';

const PageHeaderInfo = (props) => {
    const { title } = props;
    return (
        <div className="d-flex my-5
                        justify-content-center
                        align-items-center">
            <div className="text-center">
                <Link to="/" className="text-dark">
                    <span>HOME</span>
                </Link>
                <span className="mx-1">/</span>
                <span>{ title }</span>
                <h2 className="page__header mt-1">{ title }</h2>
                <div className="page__subheader">
                    Spicy jalapeno bacon ipsum dolor amet jowl brisket burgdoggen, 
                    meatball bresaola bacon boudin tri-tip pig pork 
                    fatback pork chop prosciutto short ribs.
                    Spicy jalapeno bacon ipsum dolor amet jowl brisket burgdoggen, 
                    meatball bresaola bacon boudin.
                </div>
            </div>
        </div>
    );
};

export default PageHeaderInfo;