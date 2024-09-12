import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    try {
      const response = await axios.get('http://localhost:3001/fruits/search', {
        params: { query: searchTerm }
      });

      // You can handle the search results here or redirect
      console.log(response.data);
      navigate('/search-results', { state: { results: response.data } });
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <form className="navbar-search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
