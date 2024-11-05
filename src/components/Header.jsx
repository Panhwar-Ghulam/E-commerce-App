import React from "react";
import app_logo from "../assets/logo/logo.png";
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import SearchProduct from "./SearchProduct";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  return (
    <header className="w-full h-[100px] shadow-xl py-[10px] fixed top-[-12px]">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="w-[50%] lg:w-[20%] h-[70px]">
            <NavLink to="/">
              <img
                src={app_logo}
                className="w-[100%] h-[150px] object-contain mt-[-40px]"
                alt="App Logo"
              />
            </NavLink>
          </div>

          {/* Search Bar and Filter */}
          <div className="w-[100%] lg:w-[50%]">
            <SearchProduct />
          </div>
          {/* Cart and User Icons */}
          <div className="absolute left-[68%] mt-[-50px] w-[40%] lg:w-[20%] lg:relative lg:left-0 lg:mt-0 flex items-center gap-[10px] lg:order-2">
            <ShoppingCart />
            <NavLink to="/login">
              <button className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#C54FA5] flex justify-center items-center text-white">
                <FaRegUser />
              </button>
            </NavLink>
          </div>

          {/* Navigation Links */}
          {/* <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary-700"
                >
                  Shopping
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
