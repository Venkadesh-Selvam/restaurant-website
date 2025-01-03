import React from "react";

function Pagination({ dishPerPage, totalDishes, setCurrentPage, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDishes / dishPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
          >
            <button
              onClick={() => setCurrentPage(pageNumber)}
              className="page-link"
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
