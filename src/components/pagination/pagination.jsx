import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };
  return ( 
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              previous
            </button>
          </li>
        ) : <li className="page-item">
        <button className="page-link" onClick={handlePrevious}>
          previous
        </button>
      </li>}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              next
            </button>
          </li>
        ) :  <li className="page-item">
        <button className="page-link" onClick={handleNext}>
          next
        </button>
      </li>}
      </ul>
    </nav>
  );
};

export default Pagination;
