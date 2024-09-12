import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowFruit = ({ fruitId }) => {
  const [fruit, setFruit] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFruit = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/fruits/${fruitId}`);
        setFruit(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchFruit();
  }, [fruitId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!fruit) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{fruit.title}</h1>
      <p>{fruit.description}</p>
      <p>Price: ${fruit.price}</p>
      {fruit.image && <img src={fruit.image} alt={fruit.title} />}
    </div>
  );
};

export default ShowFruit;
