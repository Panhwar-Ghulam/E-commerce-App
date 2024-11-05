import React, { useEffect, useState } from "react";
import { BsCart2, BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import useStore from "../store/store";
import { NavLink } from "react-router-dom";

const SearchProduct = () => {
  const { products, setProducts, setCategoryProducts } = useStore();
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showSearchItems, setShowSearchItems] = useState(false);

  let debounceTimeout;
  useEffect(() => {
    handleSearch(searchText);
  }, [searchText]);

  const handleSearch = (text) => {
    if (debounceTimeout) clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      if (text === "") {
        setFilteredData([]);
        setShowSearchItems(false);
      } else {
        setShowSearchItems(true);
        const filtered = products.filter((product) =>
          product?.title.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered);
      }
    }, 300);
  };

  const handleSelectedCategory = (val) => {
    console.log("here is", val.target.value);
    const text = val.target.value;
    if (text === "all") {
      setCategoryProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product?.category.toLowerCase().includes(text.toLowerCase())
      );
      setCategoryProducts(filtered);
    }
  };

  return (
    <>
      <div className="flex-grow flex items-center justify-center gap-4 mx-4 ">
        {/* Search Input */}
        <div className="relative flex flex-col items-center  w-[100%] lg:w-[60%">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search products..."
            className="w-full py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <BsSearch className="absolute left-3 top-[10px] text-gray-400" />
          <div
            className={`${
              showSearchItems ? "block" : "hidden"
            } w-full h-[300px] bg-[#f0f2f5] absolute top-[50px] p-[10px] rounded-lg overflow-hidden`}
          >
            <div className="w-full h-full overflow-y-auto">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="space-y-6 my-[10px] w-[96%] m-auto"
                  >
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                      <div className="md:flex md:items-center md:justify-between md:gap-6">
                        <img
                          className="h-20 w-20"
                          src={item.images[0]}
                          alt={item.title}
                        />
                        <div className="w-full min-w-0 flex-1 space-y-4 md:max-w-md">
                          <h2 className="text-lg font-bold">{item.title}</h2>
                          <div>
                            <NavLink to={`/single-product/${item.id}`}>
                              <button
                                onClick={() => setShowSearchItems(false)}
                                className="bg-[#C54FA5] p-[6px] rounded-sm text-[#ffff]"
                              >
                                View Product
                              </button>
                            </NavLink>
                          </div>
                        </div>
                        <p className="text-end text-base font-bold">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 mt-4 w-full h-full flex justify-center items-center">
                  <span className="text-[20px] text-[#c3c2c2]">
                    No items available
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Filter Dropdown */}
        <select
          onChange={handleSelectedCategory}
          className="py-2 px-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="all">All Products</option>
          {[...new Set(products.map((item) => item.category))].map(
            (category, index) => (
              <option key={index} value={category} className="capitalize">
                {category}
              </option>
            )
          )}
        </select>
      </div>
    </>
  );
};

export default SearchProduct;
