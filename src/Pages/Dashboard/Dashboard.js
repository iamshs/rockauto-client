import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
     
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
            <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
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
      <li>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
