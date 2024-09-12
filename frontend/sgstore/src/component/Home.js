
import React, { useState } from 'react';
import CartPage from './CartPage'; 
import FruitList from './FruitList';
import DairyList from './DairyList';
 import { Link } from 'react-router-dom'
import './Home.css'
 import Footer from './Footer';


function Home() {
  const [cartItems, setCartItems] = useState([]);  

  const addToCart = (fruit) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(item => item.id === fruit.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === fruit.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...fruit, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Link to="/fruitlist"><img className = 'ad-photo' src='./photos/sgs1.jpg' alt='AD'/></Link>
     <FruitList addToCart={addToCart} />
      <video className='vd' src='./photos/ad.mp4' autoPlay muted loop/>
        <DairyList addToCart={addToCart} />
        <CartPage 
        cartItems={cartItems} 
        setCartItems={setCartItems}  
        removeFromCart={removeFromCart} 
      />
        <Footer/>
       </div>
   
  );
}

export default Home;
