import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';
import bgLogo from "../assets/bg_logo.jpg";
import Header from '../Home/Home/Header';
import FooterNav from '../Home/Footer';


const Recipe = () => {
    const recipe = useLoaderData()
    // let [totalFood, setTotalFood] =useState([]) 
    // recipe.map(data => {setTotalFood=[...totalFood, data.food_items
    // ]})
    // console.log(totalFood)
    return (
        <div  className=" max-w-7xl mx-auto borderbg-gray-600 bg-cover bg-fixed bg-opacity-50  bg-blend-multiply "
        style={{ backgroundImage: `url(${bgLogo})` }}>
            <Header></Header>

        <div className='mb-10'>
            {
                recipe.map(foods => <RecipeDetail
                     key={foods.id}
                     foods= {foods}
                     ></RecipeDetail>)
            } 
        </div>
        <FooterNav></FooterNav>
        </div>
    );
};

export default Recipe;