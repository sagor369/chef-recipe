import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';
import bgLogo from "../assets/bg_logo.jpg";


const Recipe = () => {
    const recipe = useLoaderData()
    console.log(recipe)
    return (
        <div  className=" max-w-7xl mx-auto borderbg-gray-600 bg-cover bg-fixed bg-opacity-50  bg-blend-multiply "
        style={{ backgroundImage: `url(${bgLogo})` }}>

        <div className='grid grid-col-1 md:grid-cols-3 gap-4 mx-4'>
            {
                recipe.map(foods => <RecipeDetail
                     key={foods.id}
                     foods= {foods}
                     ></RecipeDetail>)
            } 
        </div>
        </div>
    );
};

export default Recipe;