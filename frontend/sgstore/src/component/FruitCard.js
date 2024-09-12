import React from 'react';

function FruitCard({ fruit, addToCart }) {
  return (
    <div className="fruit-card">
      <div className='fruit-cont'> {fruit.image_url && <img src={fruit.image_url} alt={fruit.title} />}</div> 
      <h3>{fruit.title}</h3>
      <p>{fruit.description}</p>
      <p>Price: ₹{fruit.price}</p>
      <button onClick={() => addToCart(fruit)}>Add to Cart</button>
    </div>
  );
}

export default FruitCard;

