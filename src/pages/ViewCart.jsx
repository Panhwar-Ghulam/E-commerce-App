import React, { useEffect, useState } from "react";
import useStore from "../store/store";
import { message } from "antd";

const ViewCart = () => {
  const {
    cartItems,
    updateCartQuantity,
    removeItme,
    quantity,
    updateQuantity,
    decrementQuantity,
    cartTotal,
  } = useStore();

  const [summery, setSummery] = useState({ products: [], grandTotal: null });
  const handleQuantityChange = (id, amount) => {
    updateQuantity(id);
    const data = cartTotal();
    setSummery(data);
  };

  const handleRemoveItem = (item) => {
    removeItme(item);
    const data = cartTotal();
    setSummery(data);
    message.error("Product removed successfully", 3); // Show error message for removal
  };

  const handleDecrementQuantity = (id) => {
    decrementQuantity(id);
    const data = cartTotal();
    setSummery(data);
  };

  useEffect(() => {
    const data = cartTotal();
    setSummery(data);
  }, []);
  return (
    <section className="py-8 antialiased dark:bg-gray-900 md:py-16 my-[100px]">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-[#C54FA5] sm:text-2xl my-[12px] uppercase">
          Shopping Cart
        </h2>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row justify-between items-start gap-[20px]">
            <div className="w-full lg:w-2/3 space-y-6 ">
              {cartItems.map((item) => (
                <div key={item.id} className="space-y-6">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                    <div className="md:flex md:items-center md:justify-between md:gap-6">
                      <img
                        className="h-20 w-20"
                        src={item.images[0]}
                        alt={item.title}
                      />

                      <div className="w-full min-w-0 flex-1 space-y-4 md:max-w-md">
                        <h2 className="text-lg font-bold">{item.title}</h2>
                        <p>{item.description}</p>
                        <div>
                          <button
                            className="bg-[#C54FA5] p-[6px] rounded-sm text-[#ffff]"
                            onClick={() => handleRemoveItem(item)}
                          >
                            Remove Itme
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <button
                          type="button"
                          onClick={() => handleDecrementQuantity(item.id)}
                          className="h-5 w-5 flex items-center justify-center rounded-md border bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          readOnly
                          className="w-10 text-center bg-transparent text-sm font-medium"
                        />
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(item.id)}
                          className="h-5 w-5 flex items-center justify-center rounded-md border bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-end text-base font-bold">
                        ${Math.floor(item.price)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-[55%] mt-6 lg:mt-0 space-y-6 bg-white sticky top-[20%]">
              <div className="rounded-lg border p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-[#C54FA5]">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-gray-200 bg-gray-100">
                          <th className="p-4 text-left font-semibold">Name</th>
                          <th className="p-4 text-left font-semibold">Price</th>
                          <th className="p-4 text-left font-semibold">
                            Quantity
                          </th>
                          <th className="p-4 text-left font-semibold">
                            Total Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {summery.products.map((item, index) => (
                          <tr key={index} className="border-b border-gray-200">
                            <td className="p-4 font-bold">{item.name}</td>
                            <td className="p-4">${item.price.toFixed(2)}</td>
                            <td className="p-4">{item.quantity}</td>
                            <td className="p-4 font-bold">
                              ${item.totalPrice.toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Original price
                    </span>
                    <span className="text-base font-medium">
                      {summery.grandTotal}
                    </span>
                  </div>
                  {/* Add other summary items as needed */}
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-base font-bold text-[#C54FA5]">
                      Total
                    </span>
                    <span className="text-base font-bold">
                      {summery.grandTotal}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-primary-700 text-white py-2.5 rounded-lg hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700">
                  Proceed to Checkout
                </button>

                <button className="bg-[#C71DA5] py-[16px] px-[16px] rounded-sm text-[#fff] w-full mt-2 text-sm font-semibold">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-lg font-medium mt-6">
            Your cart is empty.
          </p>
        )}
      </div>
    </section>
  );
};

export default ViewCart;
