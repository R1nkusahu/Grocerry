// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import './Navbar.css';
// // import { useNavigate } from 'react-router-dom';


// // function Navbar({ onSearch }) {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const navigate = useNavigate();

// //   const handleSearch = async (e) => {
// //     e.preventDefault();
// //     if (!searchTerm) return;
// //     onSearch(searchTerm);
// //     navigate('/search-results');

// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-logo">
// //         <Link to="/"><img alt='SG Store' className = 'lg' src='./photos/sgstore.png'/></Link>
// //       </div>
// //       <ul className="navbar-links">
// //         <li>
// //           <Link to="/">Home</Link>
// //         </li>
// //         <li>
// //           <Link to="/about">About</Link>
// //         </li>
// //         <li>
// //           <Link to="/signup">Signup</Link>
// //         </li>
// //         <li>
// //           <Link to="/login">Login</Link>
// //         </li>
       
        
// //       </ul>
// //       <form className="navbar-search" onSubmit={handleSearch}>
// //         <input
// //           type="text"
// //           placeholder="Search fruits or dairy..."
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //         />
// //         <button type="submit">Search</button>
// //       </form>
// //     </nav>
// //   );
// // }

// // export default Navbar;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css'; // Make sure this file exists and is correct

// function Navbar({ onSearch }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!searchTerm) return; // Do nothing if the search term is empty

//     // Call the onSearch function passed as a prop
//     onSearch(searchTerm);

//     // Redirect to the search results page
//     navigate('/search-results');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/">
//           <img alt='SG Store' className='lg' src='./photos/sgstore.png'/> {/* Ensure path is correct */}
//         </Link>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/signup">Signup</Link></li>
//         <li><Link to="/login">Login</Link></li>
//       </ul>
//       <form className="navbar-search" onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search fruits or dairy..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//     </nav>
//   );
// }

// export default Navbar;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import SearchBar from './SearchBar';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/"><img alt='SG Store' className='lg' src='./photos/sgstore.png' /></Link>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/signup">Signup</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/cart">Cart</Link></li>
//       </ul>
//       <SearchBar />
//     </nav>
//   );
// }

// export default Navbar;
// src/components/Navbar.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Navbar() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!searchTerm) return;

//     try {
//       // Make a GET request to the Rails backend to search for fruits by title
//       const response = await axios.get(`http://localhost:3001/fruits/search?query=${searchTerm}`);
//       console.log(response.data); // Log the search results (you can display them on a new page)
//       // Redirect to the search results page or handle results
//       navigate('/search-results', { state: { results: response.data } });
//     } catch (error) {
//       console.error('Search error:', error);
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/">Home</Link>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/signup">Signup</Link></li>
//         <li><Link to="/login">Login</Link></li>
//       </ul>
      
//       {/* Search Form */}
//       <form className="navbar-search" onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search fruits by title..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    try {
      // Make sure the URL and endpoint are correct.
      const response = await axios.get(`http://localhost:3000/fruits/search?query=${searchTerm}`);
      console.log(response.data); // Log the response data

      // Navigate to search results and pass results via state
      navigate('/search-results', { state: { results: response.data } });
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <nav className="navbar">
       
       <div className="navbar-logo">
    <Link to="/">
           <img alt='SG Store' className='lg' src='./photos/sgstore.png'/> {/* Ensure path is correct */}
         </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
       <li><Link to="/signup">Signup</Link></li>
       <li><Link to="/login">Login</Link></li>
    </ul>
      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search fruits by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;
