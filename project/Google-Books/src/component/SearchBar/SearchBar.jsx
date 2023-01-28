import React, { useState } from 'react';
import styles from './SearchBar.module.scss'
const SearchBar = ({setBooks}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // make API call to the google books api
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCgA3dkfDGFakYH6jgs0Ye5MFeK-_yFmRw`;
    const response = await fetch(url);
    const data = await response.json();
    // call a function to update the state with the books data
    console.log(data.items)
    setBooks(data.items);
  }

  return (
    <div className={styles.SearchBar}>
    <h1>Google Books</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a book"
      />
      <button className={styles.searchButton} type="submit">Search</button>
    </form>
    </div>
  );
};

export default SearchBar;
