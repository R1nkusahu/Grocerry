import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ModFruit.css';
import FruitCard from './FruitCard';

function ModFruit() {
  const [fruits, setFruits] = useState([]);
  const [currentFruit, setCurrentFruit] = useState({ title: '', description: '', price: '', image: null });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchFruits();
  }, []);

  const fetchFruits = async () => {
    try {
      const response = await axios.get('http://localhost:3000/fruits');
      setFruits(response.data);
    } catch (error) {
      console.error('Error fetching fruits:', error);
    }
  };

  const handleChange = (e) => {
    setCurrentFruit({
      ...currentFruit,
      [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fruit[title]', currentFruit.title);
    formData.append('fruit[description]', currentFruit.description);
    formData.append('fruit[price]', currentFruit.price);
    if (currentFruit.image) {
      formData.append('fruit[image]', currentFruit.image);
    }

    try {
      if (isEditing) {
        await axios.put(`http://localhost:3000/fruits/${currentFruit.id}`, formData);
      } else {
        await axios.post('http://localhost:3000/fruits', formData);
      }
      fetchFruits();
      setCurrentFruit({ title: '', description: '', price: '', image: null });
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving fruit:', error);
    }
  };

const handleEdit = (fruit) => {
    setCurrentFruit({
      id: fruit.id, 
      title: fruit.title,
      description: fruit.description,
      price: fruit.price,
      image: null 
    });
    setIsEditing(true);
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/fruits/${id}`);
      fetchFruits();
    } catch (error) {
      console.error('Error deleting fruit:', error);
    }
  };

  return (
    <div className="mod-fruit">
            <h1 className='fr'>Fruit Product</h1>

         <div className="fruit-list">
        {fruits.map((fruit) => (
          <div key={fruit.id}className="fruit-card-container">
            <FruitCard fruit={fruit} onBuy={() => {}} />
            <button onClick={() => handleEdit(fruit)}>Edit</button>
            <button onClick={() => handleDelete(fruit.id)}>Delete</button>
          </div>
        ))}
      </div>
      <h1 className='fr'>Add Fruit Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={currentFruit.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={currentFruit.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={currentFruit.price}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
        />
        <button type="submit">{isEditing ? 'Update' : 'Add'} Fruit</button>
      </form>

     
    </div>
  );
}

export default ModFruit;

