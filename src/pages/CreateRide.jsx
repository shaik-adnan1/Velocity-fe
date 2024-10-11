import React, { useState } from 'react';

const CreateRide = () => {
  const [formData, setFormData] = useState({
    driver: '',
    vehicle: '',
    price: '',
    seats: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to create a new ride
    console.log('Ride created', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="driver"
        placeholder="Driver Name"
        value={formData.driver}
        onChange={handleChange}
      />
      <input
        type="text"
        name="vehicle"
        placeholder="Vehicle"
        value={formData.vehicle}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />
      <input
        type="number"
        name="seats"
        placeholder="Seats Available"
        value={formData.seats}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <button type="submit">Create Ride</button>
    </form>
  );
};

export default CreateRide;
