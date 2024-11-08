import React from "react";
import app_logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white w-full rounded-lg shadow dark:bg-gray-900">
        <div className="w-[90%] m-auto  p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <div className="w-[40%] h-[70px]">
                <img
                  src={app_logo}
                  className="w-[100%] h-auto object-contain mt-[0px] lg:mt-[-50px]"
                  alt="Flowbite Logo"
                />
              </div>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-[#C54FA5] sm:text-center  font-semibold">
            ©2023 Shop Online . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
