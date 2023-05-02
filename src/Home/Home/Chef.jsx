import { Card } from "flowbite-react";
import React from "react";
import img_url from "../../assets/chef.jpg";
import { Link } from "react-router-dom";

const Chef = () => {
  return (
    <div >
        <img src={img_url} alt="" />
        <button className='ml-8 bg-orange-700 py-2 px-3 rounded ' >
            <Link to='/chef/id'> Details</Link>
        </button>
        <button className='ml-8 border-orange-700 py-2 px-3 rounded ' >
            <Link to= '/detail/id'> Recipe</Link>
        </button>
     
    </div>
  );
};

export default Chef;
