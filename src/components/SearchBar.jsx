import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search country..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full max-w-md p-2 mb-4 border rounded-lg focus:outline-none focus:ring-1"
    />
  );
};

export default SearchBar;
