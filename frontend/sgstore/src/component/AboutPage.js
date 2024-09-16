import React from 'react';
import './AboutPage.css';  

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src="./photos/About.jpg" alt="About Us" className="about-photo" />
        <div className="about-text">
          <h1>Welcome</h1>
          <p>
            Welcome to our website! We are dedicated to providing the best product and top services to our Customers. 
          </p>
          <p>
            Sahu general store is established in 1988 by Pramod Ku Sahu in Dhunkapada his vission is to bring his business to online for more customer can get the Grocerry at lowest price with great delivery services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
