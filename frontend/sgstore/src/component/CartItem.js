
import React from 'react';
import { Link } from 'react-router-dom';

function CartItem({ cartItems, onRemoveFromCart, onUpdateQuantity }) {

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart. <Link to="/">Continue Shopping</Link></p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price} x {item.quantity} ({item.type})
              <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1, item.type)}>+</button>
              <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1, item.type)}>-</button>
              <button onClick={() => onRemoveFromCart(item.id, item.type)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div>
          <p>Total Price: ${totalPrice}</p>
          <button onClick={() => alert('Proceeding to buy')}>Buy</button>
          <Link to="/">Continue Shopping</Link>
        </div>
      )}
    </div>
  );
}

export default CartItem;

