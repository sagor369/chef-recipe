import React from 'react';
import Food from '../Food/Food';

const RecipeDetail = ({foods}) => {
    const {food_items} = foods 
    console.log(food_items)
    return (
        <div>
            
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