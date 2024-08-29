import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <ul className="contact-list">
        <li>
          <a href="https://www.instagram.com/naurazhaf" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://wa.me/6281326609016" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/naurazhaf" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
