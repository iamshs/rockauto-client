import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="card w-96   bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">LOGIN</h2>

          <div className="card-actions justify-center">
            <button className="btn  w-full  ">Sign up</button>
          </div>
          <div className="divider">OR</div>
          <button
            className="btn btn-outline"
            onClick={() => signInWithGoogle()}
          >
            Continue With Google
          </button>
          <p>
            {" "}
            Don't have an account ? visit{" "}
            <span className="font-semibold text-md">
              <Link to={"/register"}>sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
