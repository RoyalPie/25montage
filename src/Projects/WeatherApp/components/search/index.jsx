import { useState } from "react";

const SearchBar = ({ searchTerm, handleSearchTerm, handleSearch }) => {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Enter Your Location"
        value={searchTerm}
        onChange={(e) => handleSearchTerm(e)}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search sasdasd
      </button>
    </div>
  );
};
export default SearchBar;
