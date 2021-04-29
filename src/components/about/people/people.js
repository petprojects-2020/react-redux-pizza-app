import React from 'react';
import './people.css';
import Person from './person';
import peopleImageFirst from './people__image-first.jpg';
import peopleImageSecond from './people__image-second.jpg';
import peopleImageThird from './people__image-third.jpg';

const People = () => {
    return (
        <div className="mt-5">
            <div className="people__heading text-center">Our People Are Just as Important </div>
            <div className="row mt-4">
                <Person image={peopleImageFirst} />
                <Person image={peopleImageSecond} />
                <Person image={peopleImageThird} />
            </div>
        </div>
    );
}

export default People;