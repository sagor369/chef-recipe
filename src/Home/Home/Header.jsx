import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../PrivetRout/PriveteRoute";
import { FaUserCircle } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  // console.log(open);

  return (
    <div className=" py-6 flex px-6 md:pl-10 md:pr-6 bg-white  justify-between items-center">
       <div onClick={() => setOpen(!open)} className="md:hidden ">
        {open === true ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>
      <div className="gap-4 flex justify-center">
        <p className="text-2xl font-bold ">Food Village</p>
        <img className="w-12 h-10" src={logo} alt="" />
      </div>

      <div
        className={`md:static duration-500 bg-slate-50  pb-6  pr-10 md:pr-0 absolute md:flex ${
          !open ? "top-20 left-0 rounded-b-lg" : "-top-96 "
        } `}
      >
        <div className="md:flex ">
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active underline nav_style " : "nav_style"
              }
              to="/"
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active underline nav_style " : "nav_style"
              }
              to="/recipe"
            >
              Recipe
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active underline nav_style " : "nav_style"
              }
              to="/"
            >
              Favorite Recipe
            </NavLink>
          </div>
          <div>
            <NavLink
              title="sahed"
              className={({ isActive }) =>
                isActive ? "active underline nav_style " : "nav_style"
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </div>
        </div>
        <div className="ml-auto pr-6">
          {user ? (
            <div className="md:flex items-center gap-6">
              <button
                onClick={logOut}
                className="ml-8 text-white bg-orange-700 py-2 px-3 rounded "
              >
                LogOut
              </button>
              {user?.photoURL ? (
                <div title={user.displayName ? user.displayName : ""}>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
              ) : (
                <div title={user.displayName ? user.displayName : ""}>
                  <FaUserCircle className="w-8 h-8" />
                </div>
              )}
            </div>
          ) : (
            <div className="md:flex">
              <div >

              <button className="ml-8 mb-4 text-white bg-orange-700 py-2 px-3 rounded ">
                <Link to="/login"> Login</Link>
              </button>
              </div>
              <div>

              <button className="ml-8 text-white bg-orange-700 py-2 px-3 rounded ">
                <Link to="/register"> Register</Link>
              </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
   
  );
};

export default Header;
