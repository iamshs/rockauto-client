import React from "react";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import useToken from "../../hooks/useToken";
import { toast } from "react-toastify";

const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  const navigate = useNavigate()
  const [token] = useToken(user || gUser)
  let signInError;


  if (error || gError || uError) {
    signInError = (
      <p className="text-red-500">{error?.message || gError?.message} </p>
    );
  }


  if (loading || gLoading || updating) {
    return <Loading />;
  }


  if (token) {
    navigate('/dashboard')
    
  }
  const onSubmit = async (data) => {
   await createUserWithEmailAndPassword(data.email, data.password);
   toast("created a new user")
   await updateProfile({ displayName: data.name })
  //  data.target.reset()
   
  };
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="card w-96   bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">SIGN UP</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />

              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {" "}
                    {errors.name.message}{" "}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />

              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {" "}
                    {errors.email.message}{" "}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {" "}
                    {errors.email.message}{" "}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character or longer",
                  },
                })}
              />

              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {" "}
                    {errors.password.message}{" "}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {" "}
                    {errors.password.message}{" "}
                  </span>
                )}
              </label>
            </div>

            {signInError}
            <input type="submit" className="btn w-full" value={"Sign Up"} />
          </form>
          <p>
            Already have an account ?
            <span className="font-semibold text-md text-primary">
              <Link to={"/login"}> Please Login</Link>
            </span>
          </p>
          <div className="divider">OR</div>
          <button
            className="btn btn-outline"
            onClick={() => signInWithGoogle()}
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
