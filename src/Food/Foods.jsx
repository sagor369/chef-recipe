import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from './Food';

const Foods = () => {
    const foods = useLoaderData()
    console.log(foods)
    return (
        <div className='grid grid-col-1 md:grid-cols-3 gap-4 mx-4'>
            

            {
                foods.food_items.map(food => <Food
                     key={food.id}
                     food = {food}
                     ></Food>)

            }
             
        </div>
    );
};

export default Foods;