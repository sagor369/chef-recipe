import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className='grid grid-cols-4 text-white bg-orange-400 bg-opacity-30 pl-20 justify-center items-center'>
        <div className='col-span-1 gap-4 flex justify-center'>
            <p className='text-2xl font-bold '>Food Village</p>
            <img className='w-12 h-10' src={logo} alt="" />
        </div>

        <dir className="col-span-3">
            <Link className='nav_style' to='/'>Home</Link>
            <Link className='nav_style' to='/'>Orders menu</Link>
            <Link className='nav_style' to='/'>Locations</Link>
            <Link className='nav_style' to='/'>Contacts</Link>
            <Link className='nav_style' to='/'>Blog</Link>
            <button className='ml-8 bg-orange-700 py-2 px-3 rounded ' >
                <Link to='/login'> Login</Link>
            </button>

        </dir>

    </div>


  );
};

export default Header;
