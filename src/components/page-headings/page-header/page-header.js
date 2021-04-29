import React from 'react';
import './page-header.css';
import { Link } from 'react-router-dom';

const PageHeader = (props) => {
    const {title, backgroundImage} = props;
    return (
        <div    style={{backgroundImage: `url(${ backgroundImage })`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}} 
                className="heading d-flex rounded justify-content-center
                            align-items-center">
            <div className="text-center text-white">
                <Link to="/" className="text-white">
                    <span>HOME</span>
                </Link>
                <span className="mx-1">/</span>
                <span>{ title }</span>
                <h2 className="mt-1">{ title }</h2>
            </div>
        </div>
    );
};

export default PageHeader;