import React from 'react';

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
  return (
    <section className="flex flex-wrap justify-center gap-2 mt-8">
      {Array.from({ length: totalPages }, (el, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          //popracować nad wyglądem paginacji
          className={`w-10 h-10 flex items-center justify-center px-3 py-1 border rounded-full cursor-pointer leading-none ${
            currentPage === i + 1
              ? 'bg-[color:var(--pokeblue-500)] text-white'
              : ''
          }`}
        >
          {i + 1}
        </button>
      ))}
    </section>
  );
};

export default Pagination;
