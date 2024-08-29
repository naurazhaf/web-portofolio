import React from 'react';
import './Home.css'; // Create a separate CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-photo">
        {/* Replace with an actual photo */}
        <div className="photo-placeholder">my photo</div>
      </div>
      <div className="profile-info">
        <h1>Naura Zhafira</h1>
        <p>never stop learning</p>
        <button className="more-button">get to know more</button>
      </div>
    </div>
  );
};

export default Home;
