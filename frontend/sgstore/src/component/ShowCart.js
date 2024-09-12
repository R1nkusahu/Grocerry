
import React from 'react';
import './ShowCart.css'; 

function ShowCart({ cartItems = [], onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!cartItems || cartItems.length === 0) {
    return <div className="empty-cart">Your cart is empty.</div>;
  }

  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <div>
            <h3>{item.title}</h3>
            <p>Price:₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div>
            <button onClick={() => onIncreaseQuantity(item.id)}>Increase Quantity</button>
            <button onClick={() => onDecreaseQuantity(item.id)}>Decrease Quantity</button>
            <button onClick={() => onRemoveItem(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h2 className="total-price">Total Price: ₹{totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default ShowCart;
