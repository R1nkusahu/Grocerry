// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import FruitCard from './FruitCard';
// import Slider from 'react-slick';
//  import 'slick-carousel/slick/slick.css';
//   import 'slick-carousel/slick/slick-theme.css';
// function FruitList({ addToCart }) {
//   const [fruits, setFruits] = useState([]);

//   useEffect(() => {
//     const fetchFruits = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/fruits');
//         setFruits(response.data);
//       } catch (error) {
//         console.error('Error fetching fruits:', error);
//       }
//     };

//     fetchFruits();
//   }, []);
//   const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 1,
//             },
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//             },
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//           },
//         ],
//       };
//   return (
//     <div className="fruit-slider">
//       <Slider {...settings}>
//       {fruits.map((fruit) => (
//         <FruitCard key={fruit.id} fruit={fruit} addToCart={addToCart} />
//       ))}</Slider>
//     </div>
//   );
// }

// export default FruitList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FruitCard from './FruitCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './FruitList.css'; // Optional: Add styles for loading, empty state

function FruitList({ addToCart }) {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);  // Add loading state
  const [error, setError] = useState(null);      // Add error state

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await axios.get('http://localhost:3000/fruits');
        setFruits(response.data);
        setLoading(false);  // Data is fetched, stop loading
      } catch (error) {
        console.error('Error fetching fruits:', error);
        setError('Failed to fetch fruits.');
        setLoading(false);  // Stop loading if error occurs
      }
    };

    fetchFruits();
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

  // Display loading message or error if applicable
  if (loading) {
    return <div className="loading">Loading fruits...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  // If no fruits available, show a message
  if (fruits.length === 0) {
    return <div className="no-fruits">No fruits available.</div>;
  }

  return (
    <div className="fruit-slider">
      <Slider {...settings}>
        {fruits.map((fruit) => (
          <FruitCard key={fruit.id} fruit={fruit} addToCart={addToCart} />
        ))}
      </Slider>
    </div>
  );
}

export default FruitList;
