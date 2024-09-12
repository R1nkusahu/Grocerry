import React from 'react';

function DairyCard({ dairy, addToCart }) {
  return (
    <div className="dairy-card">
       {dairy.image_url && <img src={dairy.image_url} alt={dairy.title} />}
      <h3>{dairy.title}</h3>
      <p>{dairy.description}</p>
      <p>Price: ₹{dairy.price}</p>
      

      <button onClick={() => addToCart(dairy)}>Add to Cart</button>
    </div>
  );
}

export default DairyCard;
