// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useLocation } from 'react-router-dom';

// // function SearchResults() {
// //   const [results, setResults] = useState([]);
// //   const location = useLocation();

// //   useEffect(() => {
// //     const searchTerm = new URLSearchParams(location.search).get('query');

// //     if (searchTerm) {
// //       axios
// //         .get(`http://localhost:3000/search?query=${searchTerm}`)
// //         .then((response) => {
// //           setResults(response.data); // Assuming your API returns filtered data
// //         })
// //         .catch((error) => {
// //           console.error('Error fetching search results:', error);
// //         });
// //     }
// //   }, [location.search]);

// //   return (
// //     <div>
// //       <h1>Search Results</h1>
// //       {results.length > 0 ? (
// //         results.map((item) => (
// //           <div key={item.id}>
// //             <h3>{item.title}</h3>
// //             <p>{item.description}</p>
// //           </div>
// //         ))
// //       ) : (
// //         <p>No results found</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default SearchResults;
// // SearchResults.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function SearchResults() {
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchResults = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/search', {
//           params: { query: new URLSearchParams(window.location.search).get('query') }
//         });
//         setResults(response.data);
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//       }
//     };

//     fetchResults();
//   }, []);

//   return (
//     <div>
//       <h1>Search Results</h1>
//       {results.length > 0 ? (
//         results.map((item) => (
//           <div key={item.id}>
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//           </div>
//         ))
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// }

// export default SearchResults;

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import FruitCard from '../component/FruitCard';

// function SearchResults() {
//   const location = useLocation();
//   const { results } = location.state || { results: [] };

//   return (
//     <div>
//       <h1>Search Results</h1>
//       <div className="fruit-list">
//         {results.length > 0 ? (
//           results.map((fruit) => (
//             <FruitCard key={fruit.id} fruit={fruit} />
//           ))
//         ) : (
//           <p>No fruits found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchResults;
// src/components/SearchResults.js
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
