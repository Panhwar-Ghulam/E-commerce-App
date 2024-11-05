import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

import { fetchData } from "../Utils/utils";
import useStore from "../store/store";
import { message } from "antd";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";

const SingleProduct = () => {
  const { addToCart } = useStore();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [singleItem, setSingleItem] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData(`/products/${id}`);
        setSingleItem(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading)
    return (
      <div className="w-full h-screen  flex justify-center items-center">
        <Loader />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  const handleAddToCart = (item) => {
    addToCart(item);
    message.success("Product added successfully", 3);
  };

  return (
    <section className="w-full h-full lg:h-screen flex justify-center items-center my-[100px]">
      <div className="w-[90%] lg:w-[85%] m-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4 justify-center items-center">
            {/* Product Images */}
            <div className="w-full md:w-1/2 px-4 mb-8 bg-white">
              <img
                src={singleItem.images[0]}
                alt="Product"
                className="w-full h-[200px] lg:h-[500px] rounded-lg  mb-4 object-contain"
                id="mainImage"
              />
              <div className="w-[100px] h-[100px] object-contain flex gap-4 py-4 justify-center overflow-x-auto">
                <img
                  src={singleItem.images[0]}
                  onClick={() => changeImage(singleItem.images[0])}
                />
                {/* Additional thumbnails */}
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">{singleItem.title}</h2>
              <p className="text-gray-600 mb-4">
                category : {singleItem.category}
              </p>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">
                  ${Math.floor(singleItem.price)}
                </span>
              </div>

              {/* Ratings */}
              <div className="flex items-center mb-4">
                <span className="ml-2 text-gray-600">
                  Rating : {singleItem.reviews[0].rating}
                </span>
              </div>

              <p className="text-gray-700 mb-6">{singleItem.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  shippingInformation :
                </h3>
                <div className="flex space-x-2">
                  <h4>{singleItem.shippingInformation}</h4>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  defaultValue="1"
                  className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => handleAddToCart(singleItem)}
                  className="bg-[#C54FA5] hover:bg-[#a64b8e] flex gap-2 items-center text-white px-6 py-2 rounded-md focus:outline-none focus:ring-2  focus:ring-offset-2"
                >
                  <span>Add to Cart</span>
                  <BsCart2 className="text-[18px]" />
                </button>
                <button className="bg-white flex gap-[8px] justify-center items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                  <span> Add to Wishlist</span>
                  <span>
                    <IoMdHeartEmpty className="text-[18px]" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
