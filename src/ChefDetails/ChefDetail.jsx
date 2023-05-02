import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ChefDetail = () => {
  const chef = useLoaderData();
  const {
    img_url,
    name,
    responsibilities,
    experience,
    total_recipe,
    id,
    details,
  } = chef;
  const { restaurants, specialty, training, awards } = details;
  console.log(chef);
  return (
    <div className="w-6/5 bg-orange-400 bg-opacity-75 mt-20">
      <h1 className="text-4xl font-bold text-center py-4 bg-gray-600 bg-opacity-70 text-white">
        Details of {name}
      </h1>
      <div className="border rounded mx-32 shadow-xl p-4">
        <div className="grid grid-cols-2  ">
          <div className="col-span-1">
            <img className="rounded" src={img_url} alt="" />
          </div>
          <div className="col-span-1 text-white pl-4">
            <p>
              <span className="font-bold text-xl">Specialty:</span> {specialty}
            </p>
            <p>
              
              <span className="font-bold text-xl"> Total Recipe :</span>
              {total_recipe}
            </p>
            <p>
              
              <span className="font-bold text-xl"> Experience:</span>
               {experience}
            </p>
            <p>
              
              <span className="font-bold text-xl"> Training
              center name :</span> {training.name}
            </p>
            <p>
              
              <span className="font-bold text-xl">
                
                Degree:
              </span> {training.degree}
            </p>

            <div>
              <h2 className=" border-b-2  text-center text-2xl py-3 font-bold text-white">
                Awards
              </h2>
              <li>{awards[0]}</li>
              <li>{awards[1]}</li>
            </div>
            <div>
              <h2 className=" border-b-2  text-center text-2xl py-3 font-bold text-white">
                Restaurants
              </h2>
              <li> restaurants: {restaurants.name} </li>
              <li>Location: {restaurants.location}</li>
              <li>Positions : {restaurants.position}</li>
            </div>
            <div>
              <h2 className=" border-b-2  text-center text-2xl py-3 font-bold text-white">
                Responsibilities
              </h2>
              {responsibilities.map((res) => (
                <li> {res}</li>
              ))}
            </div>
          </div>
        </div>
        <button className="w-full py-4 text-white text-xl bg-orange-700">
          {" "}
          <Link to={`/recipe/${id}`}> Recipe</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default ChefDetail;
