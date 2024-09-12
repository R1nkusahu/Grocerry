

import './App.css';
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import SearchResults from './component/SearchResults';
import Admin from './component/Admin';
import Signup from './component/Signup';
import User from './component/User';
import AboutPage from './component/AboutPage';
import FruitList from './component/FruitList';
import CartPage from './component/CartPage';
import PaymentPage from './component/PaymentPage';
import axios from 'axios';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  
  // Example Axios request
const handleSearch = async (searchTerm) => {
  try {
    const response = await axios.get(`/search`, { params: { query: searchTerm } });
    setSearchResults(response.data);
  } catch (error) {
    console.error('Search error:', error);
    alert('Search failed. Please try again.');
  }
};

  
  

  
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem => 
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

 
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fruitlist" element={<FruitList />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user" element={<User />} />
        {/* <Route path="/search-results" element={<SearchResults results={searchResults} />} /> */}
        <Route path="/search-results" element={<SearchResults />} />

      </Routes>
    </Router>
  );
}

export default App;
