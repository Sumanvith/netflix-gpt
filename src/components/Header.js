import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="w-screen absolute px-6 py-6 z-10 flex justify-between">
      <img
        className="w-52"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"></img>
      {user && (
        <div className="flex">
          <img className="w-52" alt="usericon" src={user.photoURL}></img>
          <button onClick={handleSignOut} className="font-bold">
            Sign Out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
