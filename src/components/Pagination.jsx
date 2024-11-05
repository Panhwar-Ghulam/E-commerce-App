import React, { useState } from "react";

const Pagination = () => {
  const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); // Sample data
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Paginated List</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="pagination">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number + 1)}
            disabled={currentPage === number + 1}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
