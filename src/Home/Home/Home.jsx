import React from 'react';
import ChefCart from './ChefCart';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <div className='mb-10'>

            <Banner></Banner>
            </div>
            <ChefCart></ChefCart>
        </div>
    );
};

export default Home;