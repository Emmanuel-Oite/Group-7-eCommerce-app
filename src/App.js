// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ProductList from './components/ProductList';
import MyCart from './components/Mycart';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer'; // Import the Footer component
import SignUp from './components/SignUp';
import Login from './components/Login';
import { AuthProvider,  AuthContext } from './contexts/AuthContext';
const App = () => {
  return (
    <Router>
      <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="SignUp" element={<SignUp/>} />
        <Route path= "Login" element={<Login/>} />
      </Routes>
      <Footer />
      </AuthProvider>
    </Router>
  );
};

export default App;
