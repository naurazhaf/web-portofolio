import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import photo from '../assets/fotoku.png'; 

const Home = () => {
  return (
    <div className="container">
      <div className="profile-pic">
        <img 
          src={photo} 
          alt="Naura Zhafira" 
          className="profile-image"
        />
      </div>
      <h1>Naura Zhafira</h1>
      <Link to="/contact">
        <button className="button">get to know more</button>
      </Link>
    </div>
  );
};

export default Home;
