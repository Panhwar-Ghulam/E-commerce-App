import React from "react";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import useStore from "../store/store";

const ShoppingCart = () => {
  const { cartItems } = useStore();

  return (
    <>
      <NavLink to="/view-cart">
        <button className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#C54FA5] flex justify-center items-center text-white relative">
          <span className="flex flex-col p-3">
            {cartItems?.length}
            <BsCart2 className="text-[20px] mt-[-7px]" />
          </span>
        </button>
      </NavLink>
    </>
  );
};

export default ShoppingCart;
