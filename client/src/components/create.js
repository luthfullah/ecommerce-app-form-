import React, { useState } from 'react';
import '../App.css'

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    manufacturer: '',
    dateAdded: '',
    quantityInStock: '',
    sku: '',
    image: null,
    discount: 0,
    new: false,
    rating: 0,
    saleCount: 0,
    category: [],
    tag: [],
    stock: 0,

  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const selectedImage = e.target.files[0];
      setFormData({
        ...formData,
        image: selectedImage,
      });
    } else if (e.target.name === 'new') {
      // Ensure 'new' is set to a boolean
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked,
      });
    } else if (e.target.name === 'category' || e.target.name === 'tag') {
      // Split the comma-separated string into an array
      setFormData({
        ...formData,
        [e.target.name]: e.target.value.split(',').map((item) => item.trim()),
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await fetch('http://localhost:5000/api', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
        },
        body: formDataToSend,
        //  body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("result", result);

      // Reset the form after successful submission
      setFormData({
        name: '',
        description: '',
        price: '',
        quantity: '',
        manufacturer: '',
        dateAdded: '',
        quantityInStock: '',
        sku: '',
        image: null,
        discount: 0,
        new: false,
        rating: 0,
        saleCount: 0,
        category: [],
        tag: [],
        stock: 0,
      });
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  // debugger
  return (
    <div>
      <h2 className='f1 tc'>Create Product</h2>
      <form className='pa6 bg-washed-green measure center mt3 w-200' onSubmit={handleSubmit}>
        <label>
          Name:
          <input className='pa1' type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} step="0.01" required />
        </label>
        <br />

        <label>
          Quantity:
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Manufacturer:
          <input type="text" name="manufacturer" value={formData.manufacturer} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Date Added:
          <input type="date" name="dateAdded" value={formData.dateAdded} onChange={handleChange} required />
        </label>
        <br />

        <label>Discount:</label>
        <input type="number" name="discount" value={formData.discount} onChange={handleChange}
        />
        <br />
        <br />

        <label>New:</label>
        <input type="checkbox" name="new" checked={formData.new} onChange={handleChange}
        />
        <br />
        <br />

        <label>Rating:</label>
        <input type="number" name="rating" value={formData.rating} onChange={handleChange}
        />
        <br />
        <br />

        <label>Sale Count:</label>
        <input type="number" name="saleCount" value={formData.saleCount} onChange={handleChange}
        />
        <br />
        <br />

        <label>Category:</label>
        <input type="text" name="category" value={formData.category.join(', ')}  // Join the array into a string  onChange={handleChange}
        />
        <br />
        <br />

        <label>Tag:</label>
        <input type="text" name="tag" value={formData.tag.join(', ')}  // Join the array into a string  onChange={handleChange}
        />
        <br />
        <br />


        <label>Stock:</label>
        <input type="number" name="stock" value={formData.stock} onChange={handleChange}
        />
        <br />

        <label>
          Quantity in Stock:
          <input type="number" name="quantityInStock" value={formData.quantityInStock} onChange={handleChange} required
          />
        </label>
        <br />
        <label>
          SKU:
          <input type="text" name="sku" value={formData.sku} onChange={handleChange} />
        </label>
        <br />

        <label>
          Image:
          <input type="file" name="image" onChange={handleChange} />
        </label> <br /> <br />


        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default ProductForm;