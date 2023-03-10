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
import ReviewUs from "./Pages/Dashboard/ReviewUs";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import YourOrder from "./Pages/Dashboard/YourOrder";
import ManageParts from "./Pages/Dashboard/ManageParts";
import Payment from "./Pages/Dashboard/Payment";
import AllReview from "./Pages/Dashboard/AllReview";



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
          <Route path="/dashboard/myOrder" element={ <YourOrder /> } />
          <Route path="/dashboard/reviewUs" element={ <ReviewUs /> } />
          <Route path="/dashboard/allReview" element={ <AllReview /> } />
          <Route path="/dashboard/payment/:orderId" element={ <Payment /> } />
          <Route path="/dashboard/addParts" element={  <RequireAdmin> <AddProduct /> </RequireAdmin> } />
          <Route path="/dashboard/allUsers" element={ <RequireAdmin> <Users /> </RequireAdmin> } />
          <Route path="/dashboard/orders" element={ <RequireAdmin> <ManageOrder /> </RequireAdmin> } />
          <Route path="/dashboard/manageParts" element={ <RequireAdmin> <ManageParts /> </RequireAdmin> } />
          
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/orderParts/:_id" element={<OrderParts />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
}

export default App;
