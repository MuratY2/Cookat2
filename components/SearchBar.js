// components/SearchBar.js

"use client";

import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search recipes..."
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;
