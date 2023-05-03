import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../PrivetRout/PriveteRoute";
import { FaUserCircle} from 'react-icons/fa'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
   

  // const [name , setName] = useState('')
  // const [photo , setPhoto] = useState(photoURL)
  // console.log(user)
  // if(user){
  //   const { displayName } = user
  //   setName(displayName)
  // }

  return (
    <div className="grid grid-cols-4 text-white bg-orange-400 bg-opacity-30 pl-20 justify-center items-center">
      <div className="col-span-1 gap-4 flex justify-center">
        <p className="text-2xl font-bold ">Food Village</p>
        <img className="w-12 h-10" src={logo} alt="" />
      </div>

      <dir className="col-span-3 flex ">
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active underline nav_style " : "nav_style"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active underline nav_style " : "nav_style"
            }
            to="/"
          >
            Locations
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active underline nav_style " : "nav_style"
            }
            to="/"
          >
            Contacts
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active underline nav_style " : "nav_style"
            }
            to="/"
          >
            Blog
          </NavLink>
        </div>

        <div>
          {user ? (
            <div className="flex gap-6">
              <button
                onClick={logOut}
                className="ml-8 bg-orange-700 py-2 px-3 rounded "
              >LogOut</button>
              {user ?
              <img className="w-8 h-8 rounded-full" title={user&& user.displayName}  src={user.photoURL} alt="" />:
               <FaUserCircle title={user&& user.displayName} className="w-8 h-8 bg-blue-400"/>
              }

            </div>

          ) : (
            <div>
              <button className="ml-8 bg-orange-700 py-2 px-3 rounded ">
                <Link to="/login"> Login</Link>
              </button>

              <button className="ml-8 bg-orange-700 py-2 px-3 rounded ">
                <Link to="/register"> Register</Link>
              </button>
            </div>
          )}
        </div>
      </dir>
    </div>
  );
};

export default Header;
