
import React from 'react';
import { useLocation } from 'react-router-dom';
import FruitCard from '../component/FruitCard';

function SearchResults() {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <div>
      {results.length > 0 ? (
        <ul>
          {results.map((fruit) => (
 <FruitCard key={fruit.id} fruit={fruit} />          ))}
        </ul>
      ) : (
        <p>No fruits found.</p>
      )}
    </div>
  );
}

export default SearchResults;
