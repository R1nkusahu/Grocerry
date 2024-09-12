
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShowCart from './ShowCart';
import './CartPage.css'; 

function CartPage({ cartItems, setCartItems, removeFromCart }) {
  const navigate = useNavigate();

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleBuy = () => {
    const totalPrice = calculateTotalPrice();
    navigate('/payment', { state: { totalPrice } });  
  };

  return (
    <div className="cart-page">
     
      <ShowCart
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onIncreaseQuantity={increaseQuantity}
        onDecreaseQuantity={decreaseQuantity}
      />
      {cartItems.length > 0 ? (
        <div className="total-price-section">
          <p>Total Price: ₹{calculateTotalPrice().toFixed(2)}</p> 
          <button className="buy-now-btn" onClick={handleBuy}>Buy Now</button>
        </div>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
