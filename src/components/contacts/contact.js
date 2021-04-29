import React from 'react';
import './contact.css';
import PageHeaderInfo from './../page-headings/page-header-info';
import Abouthours from './about-hours';
import Form from './form';

const Contact = () => {
    return (
        <main>
            <PageHeaderInfo title="CONTACTS" />
            <div className="row">
                <div className="col-12 col-md-8">
                    <Form />
                </div>
                <div className="col-12 col-md-4">
                    <Abouthours />
                </div>
            </div>
        </main>
    );
}

export default Contact;