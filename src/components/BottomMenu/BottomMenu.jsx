import React from 'react';
import { Link } from 'react-router-dom';
import './BottomMenu.css'; 

const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <Link to="/classement">Classement</Link>
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
      <Link to="/register">Rank</Link>
      <Link to="/recompenses">Recompenses</Link>
    </div>
  );
};

export default BottomMenu;
