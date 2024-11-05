import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchData } from "../Utils/utils";
import Loader from "../components/Loader";
import useStore from "../store/store";
import Banner from "../components/Banner";
import { Pagination } from "antd"; // Import Pagination from Ant Design

const ProductListing = () => {
  const { products, cateqoryProducts, setProducts } = useStore();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Customize this value as needed

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData("/products");
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );

  if (error) return <p>Error: {error}</p>;

  // Calculate the items to show on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = cateqoryProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Banner />
      <div className="w-[80%] m-auto mt-[20px] lg:mt-[50px]">
        <h2 className="text-[#C71DA5] text-[20px] uppercase border-l font-semibold">
          Future Products
        </h2>
      </div>
      <div className="w-[90%] lg:w-[86%] m-auto my-[20px] lg:my-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {currentProducts.map((item) => (
          <ProductCard key={item.id} items={item} loading={loading} />
        ))}
      </div>

      {/* Pagination Component */}
      <div className="w-[90%] lg:w-[86%] m-auto my-4 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={cateqoryProducts.length}
          onChange={handlePageChange}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} Products`
          }
          defaultPageSize={20}
          defaultCurrent={1}
        />
      </div>
    </>
  );
};

export default ProductListing;
