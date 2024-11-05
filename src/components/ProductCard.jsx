import React from "react";
import useStore from "../store/store";
import { NavLink } from "react-router-dom";
import { message } from "antd";

const ProductCard = ({ items }) => {
  const { cartItems, addToCart, clearCart } = useStore();

  const handleAddToCart = (item) => {
    addToCart(item);
    message.success("Product added successfully", 3);
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">
      <div className="flex justify-center items-center">
        <NavLink to={`/single-product/${items.id}`}>
          <img
            className="p-8 w-40 h-40 object-cover rounded-t-lg"
            src={items.images[0]}
            alt="product image"
          />
        </NavLink>
      </div>

      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {items.title.split(" ").slice(0, 6).join(" ")}
          {items.title.split(" ").length > 6 && " ..."}
        </h5>

        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${Math.floor(items.price)}
          </span>
          <button
            onClick={() => handleAddToCart(items)}
            className="text-white bg-[#C54FA5] hover:bg-[#a64b8e] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
