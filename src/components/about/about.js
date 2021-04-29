import React from 'react';
import './about.css';
import Featurelist from './feature-list';
import Special from './special';
import People from './people';
import PageHeader from './../page-headings/page-header';
import backgroundImage from './background__image.jpg';

const About = () => {
    return (
        <main>
            <PageHeader title="ABOUT PIZZA" backgroundImage={backgroundImage} />
            <Featurelist />
            <Special />
            <People />
        </main>
    );
}

export default About;