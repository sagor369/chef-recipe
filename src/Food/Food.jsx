import React from "react";
import LazyLoad from "react-lazy-load";

const Food = ({ food }) => {
  const { name, id, img_url, price } = food;
  console.log(name, id);
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
        <div>
          <button className="bg-orange-700 mt-4 text-white py-2 px-10 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
