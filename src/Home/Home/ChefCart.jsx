import React from 'react';
import Chef from './Chef';
import { useLoaderData } from 'react-router-dom';

const ChefCart = () => {
    const chefs = useLoaderData()
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                chefs.map(chef => <Chef
                     key={chef.id}
                     chef= {chef}
                      ></Chef>)
            }
            
        </div>
    );
};

export default ChefCart;