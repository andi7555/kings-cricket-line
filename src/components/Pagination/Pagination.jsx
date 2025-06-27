import React from 'react';
import PropTypes from 'prop-types';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 7; // Maximum pages to show without ellipsis

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`pagination-button ${currentPage === i ? 'active' : ''}`}
          >
            {i}
          </button>
        );
      }
    } else {
      // Show pages with ellipsis
      const leftBound = Math.max(1, currentPage - 2);
      const rightBound = Math.min(totalPages, currentPage + 2);

      // Always show first page
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`pagination-button ${currentPage === 1 ? 'active' : ''}`}
        >
          1
        </button>
      );

      // Show left ellipsis if needed
      if (leftBound > 2) {
        pages.push(<span key="left-ellipsis" className="pagination-ellipsis">...</span>);
      }

      // Show middle pages
      for (let i = leftBound; i <= rightBound; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={`pagination-button ${currentPage === i ? 'active' : ''}`}
            >
              {i}
            </button>
          );
        }
      }

      // Show right ellipsis if needed
      if (rightBound < totalPages - 1) {
        pages.push(<span key="right-ellipsis" className="pagination-ellipsis">...</span>);
      }

      // Always show last page
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`pagination-button ${currentPage === totalPages ? 'active' : ''}`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination-container">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="pagination-button"
        aria-label="Previous page"
      >
         <GoArrowLeft style={{fontSize:"15px", color:"white",alignItems:"center"}} />
      </button>

      {renderPageNumbers()}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="pagination-button"
        aria-label="Next page"
      >
         <GoArrowRight style={{fontSize:"15px",color:"white"}} />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;