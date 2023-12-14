import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-container">
      <h1>E-Commerce Website</h1>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mycart">My Cart</Link></li>
          <li><Link to="/addproduct">Add Product</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <Link to="/Login" className="login-button">Login</Link>
        <Link to="/SignUp" className="signup-button">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;