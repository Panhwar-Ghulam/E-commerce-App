// src/pages/NotFound.js

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5 text-center">
      <h1 className="text-9xl font-extrabold text-[#C71DA5] mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 text-white bg-[#C71DA5] rounded hover:bg-[#C71DA5] transition duration-200"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
