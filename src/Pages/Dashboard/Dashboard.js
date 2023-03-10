import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div className="max-w-8xl">
     
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
           <div className=" bg-[#EBECEF] py-[1rem]  "> <h1 className="text-2xl text-center lg:text-start md:text-start font-bold">DASHBOARD</h1></div>
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
          to={"/dashboard/myOrder"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary text-sm"
              : "text-sm font-semibold"
          }
        >
          MY ORDERS
        </NavLink>
      </li>
         
          <li>
        <NavLink
          to={"/dashboard/reviewUs"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary text-sm"
              : "text-sm font-semibold"
          }
        >
          REVIEW US
        </NavLink>
      </li>
          <li>
        <NavLink
          to={"/dashboard/allReview"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary text-sm"
              : "text-sm font-semibold"
          }
        >
          ALL REVIEW
        </NavLink>
      </li>
      { admin &&  <li>
        <NavLink
          to={"/dashboard/addParts"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary text-sm"
              : "text-sm font-semibold"
          }
        >
         ADD PARTS
        </NavLink>
      </li>
      }
      { admin &&  <li>
        <NavLink
          to={"/dashboard/manageParts"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary text-sm"
              : "text-sm font-semibold"
          }
        >
         MANAGE PARTS
        </NavLink>
      </li>
      }
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
     { admin &&  <li>
        <NavLink
          to={"/dashboard/orders"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary text-sm"
              : "text-sm font-semibold"
          }
        >
         MANAGE ORDERS
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
