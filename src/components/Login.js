import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " - " + errorMessage);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute ">
        <img
          className="brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgpic"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-75">
        <h1 className="font-bold py-4 my-2 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-black bg-opacity-0 rounded-lg border border-slate-400 placeholder-white"></input>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-black bg-opacity-0 rounded-lg border border-slate-400 placeholder-white"></input>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-black bg-opacity-0 rounded-lg border border-slate-400 placeholder-white"></input>
        <p className="text-red-500 py-2 font-bold">{errorMessage}</p>
        <button
          className="p-3 font-bold w-full bg-red-600 rounded-lg bg-opacity-100"
          onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-gray-400 font-bold">
          {isSignInForm ? "New to Netflix?" : "Already Registered?"}{" "}
          <Link
            onClick={toggleSignInform}
            className="text-white cursor-pointer hover:underline">
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
