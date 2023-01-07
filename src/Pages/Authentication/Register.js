import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="card w-96   bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">SIGN UP</h2>

          <div className="card-actions justify-center">
            <button className="btn  w-full  ">Sign up</button>
          </div>
          <div className="divider">OR</div>
          <button className="btn btn-outline">Continue With Google</button>
          <p>
            {" "}
            Already have an account ? visit{" "}
            <span className="font-semibold text-md">
              <Link to={"/login"}>Login</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
