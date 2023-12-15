import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

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
        {user ? (
          <>
            {/* Render Font Awesome user icon when authenticated */}
            <i className="fas fa-user user-icon"></i>
            {/* Render Font Awesome cart icon with counter */}
            <Link to="/mycart" className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
              {/* Replace 'cartCounter' with your actual counter logic */}
              <span className="cart-counter"></span>
            </Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          // Render login and sign-up buttons when not authenticated
          <>
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/signup" className="signup-button">Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
