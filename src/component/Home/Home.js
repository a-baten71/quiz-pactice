import React from 'react';
import Carusel from '../Carusel/Carusel';
import Topics from '../Topics/Topics';

const Home = () => {
    return (
        <div>
            <div className='mb-12'>
                <Carusel></Carusel>
            </div>
            <div>
                <Topics></Topics>
            </div>
        </div>
    );
};

export default Home;