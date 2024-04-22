import React, { useState } from 'react';

const SignupComponents = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    name: '',
    address: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to create user context');
      }
      // Clear the form fields after successful creation
      setFormData({
        userId: '',
        password: '',
        name: '',
        address: ''
      });
      alert('User context created successfully!');
    } catch (error) {
      console.error('Error:', error.message);
      alert('Failed to create user context. Please try again.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Create User Context</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default SignupComponents;