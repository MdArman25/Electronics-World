import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo/letter-e-technological-logo_575535-207.jpg";
import Context from "../UseHook/Context";
import { useEffect, useState } from "react";

const Navber = () => {
  const { user, logOut } = Context();
  const [them,SetThem]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light')

 const handleToggle = (e) => {
  if (e.target.checked) {
    SetThem("dark");
  } else {
    SetThem("light");
  }
};

 useEffect(()=>{
  localStorage.setItem("theme",them)
  const localTheme = localStorage.getItem("theme");
  document.querySelector("html").setAttribute("data-theme", localTheme);

 },[them])



  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending "
            : isActive
            ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/aboutus"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            : ""
        }
      >
        <li className="">About Us</li>
      </NavLink>
      <NavLink
        to="/Contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            : ""
        }
      >
        <li className="">Contact</li>
      </NavLink>
      {user?.email && (
        <ul className="md:flex gap-5">
      <NavLink
        to="/addcard"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            : ""
        }
      >
        <li className="">Add Card</li>
      </NavLink>
          <NavLink
            to="/AddCart"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                : ""
            }
          >
            <li className="">My Cart</li>
          </NavLink>
        </ul>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 items-center fixed top-0 left-0 right-0 z-50 opacity-90 max-w-screen-2xl mx-auto border-b border-gray-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-medium  mb-2"
            >
              {navlinks}
            </ul>
          </div>
          <Link className="flex items-center gap-2 md:text-xl font-bold ">
            <img
              src={Logo}
              className=" w-14 md:ml-6 md:w-16 rounded-full "
              alt=""
            />
            <p>Electronics World</p>
          </Link>
        </div>

        <div></div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5 items-center text-lg font-medium  ">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="flex items-center gap-3 ">
              <p className="">{user.displayName}</p>
              <NavLink className='btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ' onClick={logOut} to="/">
                LogOut
              </NavLink>
              {/* <p onClick={logOut}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending "
                    : isActive
                    ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    : ""
                }>LogOut</p> */}
              <img
                className="w-10 rounded-full dropdown"
                src={user.photoURL}
                alt=""
              />
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  : ""
              }
            >
              Login
            </NavLink>
          )}

<label className="swap swap-rotate md:px-8">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onClick={handleToggle} />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>

          {/* <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <button
        className={`px-4 py-2 rounded-md ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
        onClick={toggleMode}
      >
        <div className="flex items-center">
          <
            icon={isDarkMode ? 'moon' : 'sun'} // Icon based on mode
            size={24}
            className={`mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`}
          />
          Toggle Mode: {isDarkMode ? 'Dark' : 'Light'}
        </div>
      </button>
    </div> */}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navber;
