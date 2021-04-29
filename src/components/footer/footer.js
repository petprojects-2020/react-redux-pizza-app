import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer__container mt-5 row px-3 rounded
                        justify-content-between align-items-center">
            <div className="col-12 col-sm-6 col-md-3 socialLinks d-flex justify-content-center justify-content-md-around text-white">
                <div>
                    <i className="fa fa-twitter fa-2x"></i>
                </div>
                <div className="ml-3">
                    <i className="fa fa-facebook-f fa-2x"></i>
                </div>
                <div className="ml-3">
                    <i className="fa fa-instagram fa-2x"></i>
                </div>
                <div className="ml-3">
                    <i className="fa fa-youtube fa-2x"></i>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center copyRights text-white">
                Pizza APP | © 2021 All rights reserved
            </div>
        </footer>
    );
}

export default Footer;