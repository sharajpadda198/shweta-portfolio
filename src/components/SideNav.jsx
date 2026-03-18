import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

function SideNav({ isOpen, onClose }) {
  return (
    <div className={`side-nav${isOpen ? ' open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <nav>
        <ul>
          <li><Link to="/" onClick={onClose}>Home</Link></li>
          <li><Link to="/blog" onClick={onClose}>Blog</Link></li>
          <li><Link to="/contents" onClick={onClose}>My Contents</Link></li>
          <li><Link to="/collabs" onClick={onClose}>Collabs</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
