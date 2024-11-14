import React from "react";
import "./Pagination.css";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
