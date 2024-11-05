import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import app_logo from "../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import { message } from "antd";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    message.error("backend error!");
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-6 max-w-md w-full">
        <div className="w-[100%] h-[70px]">
          <NavLink to="/">
            <img
              src={app_logo}
              className="w-[100%] h-[150px] object-contain mt-[-40px]"
              alt="App Logo"
            />
          </NavLink>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700" htmlFor="email">
            Email Address
          </label>
          <div className="flex items-center bg-gray-100 rounded-lg p-2 shadow-md">
            <IonIcon name="mail-outline" className="text-gray-600" />
            <input
              type="email"
              name="email"
              placeholder="Username@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent flex-1 outline-none pl-2"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700" htmlFor="password">
            Password
          </label>
          <div className="flex items-center bg-gray-100 rounded-lg p-2 shadow-md">
            <IonIcon name="lock-closed-outline" className="text-gray-600" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="············"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent flex-1 outline-none pl-2"
            />
            <IonIcon
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              className="text-gray-600 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="bg-[#C71DA5] text-white rounded-lg py-2 font-semibold hover:bg-[#b35aa1] transition duration-200"
        >
          Login
        </button>

        <div className="flex justify-between text-gray-600 text-sm mt-4">
          <span className="cursor-pointer">Sign up</span>
          <span className="cursor-pointer text-[#C71DA5]">
            Forgot Password?
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
