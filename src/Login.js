import React from "react";
import logo from "./images/bruma-logo.jpg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login flex flex-col items-center h-screen bg-white">
      <Link to="/">
        <img
          className="login_logo my-[20px] object-contain w-[100px] mx-auto"
          src={logo}
          alt=""
        />
      </Link>
      <div className="login_container w-[300px] h-fit flex flex-col rounder-[5px] border-solid border-[1px] border-neutral-300 p-[20px]">
        <h1 className="font-medium mb-[20px] text-xl">Sign in</h1>
        <form>
          <h5 className="mb-[5px]">Email</h5>
          <input
            className="h-[30px] mb-[10px] bg-white w-[98%] border-solid border-[1px] p-[5px]"
            type="email"
          />

          <h5 className="mb-[5px]">Password</h5>
          <input
            className="h-[30px] mb-[10px] bg-white w-[98%] border-solid border-[1px] p-[5px]"
            type="password"
          />

          <button className="login_signInButton bg-[#20ACE8] rounded-[2px] w-full h-[30px] border-solid border-[1px] mt-[10px] border-black">
            Sign In
          </button>

          <button className="login_registerButton rounded-[2px] w-full h-[30px] border-solid border-[1px] mt-[10px] border-black">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
