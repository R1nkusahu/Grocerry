
import React from 'react';

function Cart({ cartItems, onRemoveFromCart, onUpdateQuantity }) {
 
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

 
  const handleQuantityChange = (id, delta) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const newQuantity = item.quantity + delta;
      if (newQuantity > 0) {
        onUpdateQuantity(id, newQuantity);
      }
    }
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price} x {item.quantity}
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div>
          <p>Total Price: ${totalPrice}</p>
          <button onClick={() => alert('Proceeding to buy')}>Buy</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
