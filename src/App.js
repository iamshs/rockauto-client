import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import OrderParts from "./Pages/Home/OrderParts";
import NotFound from "./Pages/Shared/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Users from "./Pages/Dashboard/Users";
import DashIndex from "./Pages/Dashboard/DashIndex";
import RequireAdmin from "./Pages/Dashboard/RequireAdmin";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/contact"
          element={
           <Contact />
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<DashIndex />} />
          <Route path="/dashboard/myProfile" element={ <MyProfile /> } />
          <Route path="/dashboard/addProduct" element={ <AddProduct /> } />
          <Route path="/dashboard/allUsers" element={ <RequireAdmin> <Users /> </RequireAdmin> } />
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/orderParts/:_id" element={<OrderParts />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} theme="dark" />
    </div>
  );
}

export default App;
