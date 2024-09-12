
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DairyCard from './DairyCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function DairyList({ addToCart }) {
  const [dairies, setDairies] = useState([]);

  useEffect(() => {
    const fetchDairies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/dairies');
        setDairies(response.data);
      } catch (error) {
        console.error('Error fetching dairies:', error);
      }
    };

    fetchDairies();
  }, []);
  const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
  return (

    <div className="dairy-slider">
      <Slider {...settings}>
      {dairies.map((dairy) => (
        <DairyCard key={dairy.id} dairy={dairy} addToCart={addToCart} />
      ))}</Slider>
    </div>
  );
}

export default DairyList;

