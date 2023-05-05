import React from "react";
import Chef from "./Chef";
import { useLoaderData } from "react-router-dom";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const ChefCart = () => {
  const data = [
    { name: "JOHN SMITH", value: 4.8 },
    { name: "MARIA GARCIA", value: 4.3 },
    { name: "DAVID LEE", value: 4.5 },
    { name: "ALICE JOHNSON", value: 4.2 },
    { name: "DAVID KIM", value: 4 },
    { name: "JULIA MARTINEZ", value: 4.4 },
  ];

  const chefs = useLoaderData();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>

      <div className=" bg-white py-10 my-10">
        <h1 className="text-center font-bold text-orange-500  py-4 text-3xl border-b-2">Chef Ranking charts </h1>
        <div className=" bg-white md:h-96  grid justify-center items-center md:grid-cols-2 grid-cols-1 gap-4">
          <div className="border-r-4 pl-20">
            <li className="nsme">JOHN SMITH</li>
            <li className="nsme">MARIA GARCIA</li>
            <li className="nsme">DAVID LEE</li>
            <li className="nsme">ALICE JOHNSON</li>
            <li className="nsme">DAVID KIM</li>
            <li className="nsme">JULIA MARTINEZ</li>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie dataKey="value" data={data} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
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
