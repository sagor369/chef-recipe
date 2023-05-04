import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import{ FaHeart } from 'react-icons/fa'

const Food = ({ food }) => {
  const { name, id, img_url, price } = food;
  console.log(name, id);
  const [dis, setDis] = useState(false)

  const disableBtn = (e) => {
    setDis(true)

  }

  return (
    <div className="bg-white rounded mt-20  shadow p-4">
      <div>
        <LazyLoad className="h-64" threshold={0.99}>
          <img className="h-64 w-full rounded-t-lg" src={img_url} alt="" />
        </LazyLoad>
      </div>
      <div className="bg-orange-300 rounded-b-lg pl-4 pb-3 bg-opacity-70">
        <h3 className=" text-2xl font-bold "> {name}</h3>
        <p>
          <span className=" text-xl font-bold">Price: </span> ${price}
        </p>
        <div className="flex justify-between pr-2 ">
          <button className="bg-orange-700 mt-4 text-white py-2 px-10 rounded">
            Buy Now
          </button>
          <button onClick={disableBtn} disabled={dis}  className={dis ? "btnDis": "btn"}>
            <span>Favorite</span>   <FaHeart className="w-5 ml-2 h-5"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
