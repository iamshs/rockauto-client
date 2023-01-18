import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div>
     
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
           <div className=" bg-[#EBECEF] py-[1rem] "> <h1 className="text-2xl font-bold">DASHBOARD</h1></div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-56 bg-[#EBECEF] text-base-content">
          <li>
        <NavLink
          to={"/dashboard/myProfile"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary text-sm"
              : "text-sm font-semibold"
          }
        >
          MY PROFILE
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/addProduct"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary text-sm"
              : "text-sm font-semibold"
          }
        >
         ADD PRODUCT
        </NavLink>
      </li>
     { admin &&  <li>
        <NavLink
          to={"/dashboard/allUsers"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary text-sm"
              : "text-sm font-semibold"
          }
        >
         ALL USERS
        </NavLink>
      </li>
      }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
