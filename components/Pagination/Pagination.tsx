import React from "react";
import Style from "./Pagination.module.scss";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
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
  return (
    <section className={Style["pagination_section"]}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={Style["prev_button"]}
      >
        &lt;
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={currentPage === index + 1 ? Style["active"] : ""}
          onClick={() => onPageChange(index + 1)}
        >
          {String(index + 1).padStart(2, "0")}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={Style["next_button"]}
      >
        &gt;
      </button>
    </section>
  );
};

export default Pagination;
