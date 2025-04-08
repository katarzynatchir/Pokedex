import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Szukaj..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className="bg-white dark:bg-neutral-600 p-2 mb-6 rounded-xl border border-gray-300 dark:border-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 "
    />
  );
};

export default SearchBar;
