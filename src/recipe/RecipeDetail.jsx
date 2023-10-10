import React from 'react';
import Food from '../Food/Food';

const RecipeDetail = ({foods}) => {
    const {food_items} = foods 
    console.log(food_items)
    return (
        <div className='grid grid-col-1 md:grid-cols-3 gap-4 mx-4'>
            
            {
                food_items.map(food => <Food
                    key={food.id}
                    food = {food}
                ></Food>)
            }
        </div>
    );
};

export default RecipeDetail;