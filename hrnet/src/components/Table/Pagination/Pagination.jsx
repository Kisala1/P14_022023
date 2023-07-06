import styles from './Pagination.module.scss';

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    // Define the page margin to be displayed on each side of the current page
    const delta = 2;
    // Calculate left and right margin limits
    const left = currentPage - delta;
    const right = currentPage + delta + 1;
    let range = [];
    let rangeWithDots = [];
    const l = [];

    // Loop over all pages and add those to be displayed to the "range" list
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i < right)) {
        range.push(i);
      }
    }
    
    // Loop over pages in the "range" list and add suspension points 
    // between pages more than one unit apart.
    for (let i of range) {
      if (l.length && i - l[l.length - 1] !== 1) {
        rangeWithDots.push('...');
      }
      l.push(i);
      rangeWithDots.push(i);
    }

    return rangeWithDots;
  };

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.pageNumber} ${
          currentPage === 1 ? styles.disabled : ''
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {getPageNumbers().map((pageNumber, index) => {
        if (pageNumber === '...') {
          return (
            <span key={index} className={styles.dots}>
              {pageNumber}
            </span>
          );
        }
        return (
          <button
            key={index}
            className={`${styles.pageNumber} ${
              currentPage === pageNumber ? styles.active : ''
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className={`${styles.pageNumber} ${
          currentPage === totalPages ? styles.disabled : ''
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
