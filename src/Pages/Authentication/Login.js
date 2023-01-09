import React from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

 
if(loading || gLoading){
  return <Loading />
}
  if (user || gUser) {
    console.log(user);
  }
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email,data.password)
  };
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="card w-96   bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">LOGIN</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
               {...register("email", {
                 required: {
                value:true,
                message:'Email is required'
               },
               pattern:{
                value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message:'Provide a valid Email'
               } })} />

          <label className="label">
            {
              errors.email?.type==='required' && (  <span className="label-text-alt text-red-600"> {errors.email.message} </span> )
            }
            {
              errors.email?.type==='pattern' && (  <span className="label-text-alt text-red-600"> {errors.email.message} </span> )
            }
        
        </label>
              {/* <label className="label">
               
              </label> */}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
               {...register("password", {
                 required: {
                value:true,
                message:'Password is required'
               },
               minLength:{
                value:6,
                message:'Password must be 6 character or longer'
               } })} />

          <label className="label">
            {
              errors.password?.type==='required' && (  <span className="label-text-alt text-red-600"> {errors.password.message} </span> )
            }
            {
              errors.password?.type==='minLength' && (  <span className="label-text-alt text-red-600"> {errors.password.message} </span> )
            }
        
        </label>
           
            </div>
           

            <input type="submit" className="btn w-full" value={'Login'} />
          </form>
          <p>
            Don't have an account ?
            <span className="font-semibold text-md">
              <Link to={"/register"}> create an account</Link>
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

export default Login;
