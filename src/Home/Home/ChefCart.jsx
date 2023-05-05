import React from "react";
import Chef from "./Chef";
import { useLoaderData } from "react-router-dom";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

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
        <h1 className="text-center font-bold text-orange-500  py-4 text-3xl border-b-2">
          Chef Ranking charts
        </h1>
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

      <div className="bg-white rounded bg-opacity-90 mx-6 px-4 p-4 my-6">
        <h1 className="text-center font-bold text-orange-500 mb-4 py-4 text-3xl border-red-300 border-b-2">
          Feedback Area
        </h1>
        <div id="textarea ">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Feedback your comment " />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required={true}
            rows={4}
          />
          <TextInput
            id="email4"
            type="email"
            // icon={HiMail}
            // rightIcon={HiMail}
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>
        <div className="py-4">
          <Button size="xl">Extra large</Button>
        </div>
      </div>
    </>
  );
};

export default ChefCart;
