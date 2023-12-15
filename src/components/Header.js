import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout, cartCounter } = useAuth(); // Assuming cartCounter is part of your auth context

  return (
    <header className="header-container">
      <div className="title-and-tagline">
        <h1 className="site-title">Educatio E-Shop</h1>
        <p className="site-tagline">Unleashing Potential Through Learning</p>
      </div>
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/mycart" className="nav-link">My Cart</Link></li>
          <li className="nav-item"><Link to="/addproduct" className="nav-link">Add Product</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        {user ? (
          <>
            <i className="fas fa-user user-icon" aria-hidden="true"></i>
            <Link to="/mycart" className="cart-icon">
              <i className="fas fa-shopping-cart" aria-hidden="true"></i>
              <span className="cart-counter">{cartCounter}</span>
            </Link>
            <button onClick={logout} className="logout-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="auth-button login-button">Login</Link>
            <Link to="/signup" className="auth-button signup-button">Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

