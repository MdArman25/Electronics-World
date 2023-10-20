import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo/letter-e-technological-logo_575535-207.jpg";
import Context from "../UseHook/Context";


const Navber = () => {
  const { user, logOut} = Context()


  const navlinks = (
    < >
        <NavLink
        to="/"
        className={({ isActive, isPending}) =>
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
            <img src={Logo} className=" w-14 md:ml-6 md:w-16 rounded-full " alt="" />
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
     
          {
            user?.email? (<div className="flex items-center gap-3 "
             
              >
                <p className="">{user.displayName}</p>
                <p onClick={logOut}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending "
                    : isActive
                    ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    : ""
                }>LogOut</p>
                <img className="w-10 rounded-full dropdown" src={user.photoURL} alt="" />
                
              </div>):   <NavLink
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
          }
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navber;
