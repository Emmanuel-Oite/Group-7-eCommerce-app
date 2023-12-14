import React, { useState } from 'react';

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: name === 'image' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send product data to your server or state management
    console.log('Product added:', product);
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
