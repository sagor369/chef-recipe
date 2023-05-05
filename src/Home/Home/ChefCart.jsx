import React from "react";
import Chef from "./Chef";
import { useLoaderData } from "react-router-dom";

const ChefCart = () => {
  const chefs = useLoaderData();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
      <div className="bg-white rounded w-3/4 mx-auto p-4 my-6">
        <h1 className="text-orange-500 text-2xl font-bold text-center uppercase py-4">
          heire chef blog
        </h1>
        <p>
          Here you can take a cook for any occasion and the cooks here are
          properly trained and their food recipes are very good. If you want,
          you can make us cook from any country. Our chefs have not performed
          abroad, they have many specialist dishes. Here you will get any kind
          of cook anytime without any payment
        </p>
      </div>

      <div className="bg-white rounded w-3/4 mx-auto p-4 mb-6">
        <h2 className="text-orange-500 uppercase text-2xl font-bold text-center ">
          Delivery Blog
        </h2>
        <p>
          You can order any food from here, moreover, we provide home delivery
          from here. Home delivery charges are applicable. From there, you can
          order any food from home and abroad. The quality of our food is very
          good. We provide home delivery, we do not provide home delivery
          outside Dhaka, moreover, some of our showrooms are outside Dhaka.
        </p>
      </div>
    </>
  );
};

export default ChefCart;
