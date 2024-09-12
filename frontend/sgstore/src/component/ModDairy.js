import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ModDairy.css';
import DairyCard from './DairyCard';

function ModDairy() {
  const [Dairies, setDairies] = useState([]);
  const [currentDairy, setCurrentDairy] = useState({ title: '', description: '', price: '', image: null });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchDairies();
  }, []);

  const fetchDairies = async () => {
    try {
      const response = await axios.get('http://localhost:3000/dairies');
      setDairies(response.data);
    } catch (error) {
      console.error('Error fetching dairies:', error);
    }
  };

  const handleChange = (e) => {
    setCurrentDairy({
      ...currentDairy,
      [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('dairy[title]', currentDairy.title);
    formData.append('dairy[description]', currentDairy.description);
    formData.append('dairy[price]', currentDairy.price);
    if (currentDairy.image) {
      formData.append('dairy[image]', currentDairy.image);
    }

    try {
      if (isEditing) {
        await axios.put(`http://localhost:3000/dairies/${currentDairy.id}`, formData);
      } else {
        await axios.post('http://localhost:3000/dairies', formData);
      }
      fetchDairies();
      setCurrentDairy({ title: '', description: '', price: '', image: null });
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving dairy:', error);
    }
  };


const handleEdit = (dairy) => {
    setCurrentDairy({
      id: dairy.id, 
      title: dairy.title,
      description: dairy.description,
      price: dairy.price,
      image: null 
    });
    setIsEditing(true);
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/dairies/${id}`);
      fetchDairies();
    } catch (error) {
      console.error('Error deleting dairy:', error);
    }
  };

  return (
    <div className="mod-dairy">
            <h1 className='fr'>Dairy Product</h1>

         <div className="dairy-list">
        {Dairies.map((dairy) => (
          <div key={dairy.id}className="dairy-card-container">
            <DairyCard dairy={dairy} onBuy={() => {}} />
            <button onClick={() => handleEdit(dairy)}>Edit</button>
            <button onClick={() => handleDelete(dairy.id)}>Delete</button>
          </div>
        ))}
      </div>
      <h1 className='fr'>Add Dairy Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={currentDairy.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={currentDairy.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={currentDairy.price}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
        />
        <button type="submit">{isEditing ? 'Update' : 'Add'} Dairy</button>
      </form>

     
    </div>
  );
}

export default ModDairy;