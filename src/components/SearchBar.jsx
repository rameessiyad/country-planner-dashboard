import React, { useState, useEffect } from "react";

const SearchBar = ({ searchTerm, setSearchTerm, delay = 300 }) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue); 
    }, delay);

    return () => clearTimeout(handler); 
  }, [inputValue, setSearchTerm, delay]);

  return (
    <input
      type="text"
      placeholder="Search country..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="w-full max-w-md p-2 mb-4 border rounded-lg focus:outline-none focus:ring-1"
    />
  );
};

export default SearchBar;
