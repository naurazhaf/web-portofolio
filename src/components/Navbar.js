import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../components/ThemeContext.jsx';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const root = document.getElementById('root');
    const body = document.body;

    if (theme === 'light') {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
  
      body.classList.add('light-mode'); 
      body.classList.remove('dark-mode'); 
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
  
      body.classList.add('dark-mode');  
      body.classList.remove('light-mode'); 
    }
  }, [theme]);

  const handleChangeTheme = () => {
    toggleTheme();
  };

  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/" className="link">Home</Link>
        <Link to="/projects" className="link">Projects</Link>
        <Link to="/contact" className="link">Contact</Link>
      </div>
      <div className='but-theme'>
        <button onClick={handleChangeTheme}>Change Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
