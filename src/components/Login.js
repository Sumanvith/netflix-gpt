import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgpic"></img>
      </div>
      <form className="absolute text-white bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <h1 className="font-bold py-4 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-black bg-opacity-0 rounded-lg border border-slate-400 placeholder-white"></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-black bg-opacity-0 rounded-lg border border-slate-400 placeholder-white"></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-black bg-opacity-0 rounded-lg border border-slate-400 placeholder-white"></input>
        <button className="p-4 my-6 w-full bg-red-600 rounded-lg bg-opacity-100">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-gray-400 font-bold" onClick={toggleSignInform}>
          {isSignInForm ? "New to Netflix?" : "Already Registered?"}{" "}
          <Link className="text-white cursor-pointer hover:underline">
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
