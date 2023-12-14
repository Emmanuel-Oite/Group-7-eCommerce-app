import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is imported if you're using it for HTTP requests
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faPaypal as fabPaypal } from '@fortawesome/free-brands-svg-icons';
import '../index.css';

const Checkout = () => {
  const { user } = useAuth();
  const { cart, dispatch } = useCart();
  
  const [paymentOption, setPaymentOption] = useState('');
  const [address, setAddress] = useState({
    location: '',
    phone: '',
    // Add more address fields as needed
  });

  const handlePaymentOption = (option) => {
    setPaymentOption(option);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleCheckout = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/checkout', {
        userId: user.id,
        items: cart
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      });

      alert('Checkout successful! Order ID: ' + response.data.orderId);
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Checkout failed: ' + (error.response?.data?.message || 'Please try again.'));
    }
  };

  useEffect(() => {
    if (!user) {
      alert('Please login or sign up to proceed with the purchase.');
    }

    if (paymentOption === 'card') {
      window.location.href = 'https://mea.mastercard.com/en-region-mea.html';
    } else if (paymentOption === 'cash') {
      window.location.href = 'https://codshopy.com/';
    } else if (paymentOption === 'paypal') {
      window.location.href = 'https://www.paypal.com/ke/home';
    }
  }, [paymentOption, user]);

  return (
    <div className="checkout-container">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <div className="payment-options">
        <div className={`option ${paymentOption === 'card' ? 'selected' : ''}`} onClick={() => handlePaymentOption('card')}>
          <FontAwesomeIcon icon={faCreditCard} />
          <span>Credit Card</span>
        </div>
        <div className={`option ${paymentOption === 'cash' ? 'selected' : ''}`} onClick={() => handlePaymentOption('cash')}>
          <FontAwesomeIcon icon={faMoneyBill} />
          <span>Cash on Delivery</span>
        </div>
        <div className={`option ${paymentOption === 'paypal' ? 'selected' : ''}`} onClick={() => handlePaymentOption('paypal')}>
          <FontAwesomeIcon icon={fabPaypal} />
          <span>PayPal</span>
        </div>
      </div>
      <div className="address-section">
        <h3 className="text-lg font-semibold mb-2">Address Information</h3>
        <label className="label">Location:</label>
        <input
          type="text"
          name="location"
          value={address.location}
          onChange={handleAddressChange}
          className="input-field"
        />
        <label className="label">Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={address.phone}
          onChange={handleAddressChange}
          className="input-field"
        />
      </div>
      <button onClick={handleCheckout} className="checkout-button">
        Checkout
      </button>
    </div>
  );
};

export default Checkout;