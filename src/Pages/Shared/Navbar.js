import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading){
    <Loading />
  }
  const logout = () => {
    signOut(auth);
  };
  const navList = (
    <>
      <li>
        <NavLink  to={"/"}  className={({ isActive }) =>
              isActive ? 'font-bold text-secondary text-sm' : 'text-sm font-semibold'
            }>HOME</NavLink>
      </li>
      <li>
        <NavLink  to={"/about"}  className={({ isActive }) =>
              isActive ? 'font-bold text-secondary text-sm' : 'text-sm font-semibold'
            }>ABOUT</NavLink>
      </li>
      <li>
       {
        user ? <button onClick={logout} className="btn btn-ghost text-bold text-md">Sign Out</button>:  <NavLink  to={"/register"}  className={({ isActive }) =>
        isActive ? 'font-bold text-secondary text-sm' : 'text-sm font-semibold'
      }>SIGN UP</NavLink>
       }
      </li>
    </>
  );

  return (
    <div className="navbar">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
          >
           {navList}
          
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case font-bold text-2xl">
          RockAuto
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Get started</a>
      </div> */}
    </div>
  );
};

export default Navbar;
