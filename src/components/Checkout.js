import React, { useState } from 'react';

function Checkout({ cartItems }) {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'Credit Card'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to process the checkout
    console.log('Checkout details:', customerInfo, cartItems);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Your Cart</h3>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.name} - ${item.price}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={customerInfo.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={customerInfo.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          value={customerInfo.address}
          onChange={handleInputChange}
          required
        />
        <select
          name="paymentMethod"
          value={customerInfo.paymentMethod}
          onChange={handleInputChange}
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
}

export default Checkout;
