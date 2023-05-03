import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import LazyLoad from "react-lazy-load";

const Chef = ({ chef }) => {
  const { name, id, img_url, experience, total_recipe, rating } = chef;
  console.log(rating);
  const [rat, setRat] = useState(rating)

  return (
    <div className="border rounded p-4 bg-white shadow-xl">
      <div >
        <LazyLoad className="w-full h-96 " threshold={0.99}>
         <img className="h-full w-full" src={img_url} alt="" />
        </LazyLoad>
      </div>
      <h2 className="text-2xl mb-2 bg-orange-300 py-3 font-bold uppercase text-center  ">
        {name}
      </h2>

      <p>
        
        Experience: <span className="font-bold">{experience}</span>
      </p>
      <p>
        Total Recipes: <span className="font-bold">
          {total_recipe} recipe
        </span>
      </p>
      <p className=" flex gap-2 items-center">
      <Rating style={{ maxWidth: 150 }} value={Math.floor(rat)} /> <span>{rat}</span>
      </p>
      <div className="flex justify-between items-center ">
        <button className=" bg-orange-700 text-white py-2 px-10 rounded ">
          <Link to={`/chef/${id}`}> Details</Link>
        </button>
        <button className=" border-2 text-orange-500 border-orange-700 py-2 px-10 rounded ">
          <Link to={`/recipe/${id}`}> Recipe</Link>
        </button>
      </div>
    </div>
  );
};

export default Chef;
