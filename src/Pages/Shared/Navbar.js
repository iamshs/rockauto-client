import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
  if (loading) {
    <Loading />;
  }
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
    navigate('/login')

  };
  const navList = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary text-sm"
              : "text-sm font-semibold"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary text-sm"
              : "text-sm font-semibold"
          }
        >
          CONTACT
        </NavLink>
      </li>
      <li>
        {
          user && <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary text-sm"
              : "text-sm font-semibold"
          }
        >
         DASHBOARD
        </NavLink>
        }
      </li>
      <li>
        {user ? (
          <button onClick={logout} className="btn btn-ghost text-bold text-md">
            Sign Out
          </button>
        ) : (
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-secondary text-sm"
                : "text-sm font-semibold"
            }
          >
            SIGN IN
          </NavLink>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar max-w-8xl ">
      <div className="navbar-start ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-32"
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
      <div className="navbar-end">
      <label tabIndex={1}  htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
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
      </div>
    </div>
  );
};

export default Navbar;
