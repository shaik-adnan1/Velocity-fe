import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './CarPulling.css';

const CarPullingPage = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [numberOfPassengers, setNumberOfPassengers] = useState(1);
  const [date, setDate] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to fetch and display available car pooling options
  };

  return (
    <div>
      <header className="hero">
        <h1>Find Your Car Pool</h1>
        <p>Share rides and reduce costs with our car pooling service!</p>
      </header>
      <div className="car-pulling-container">
        <form onSubmit={handleSubmit} className="pool-form">
          <label>Pickup Location:</label>
          <input 
            type="text" 
            value={pickupLocation} 
            onChange={(e) => setPickupLocation(e.target.value)} 
            placeholder="Enter Pickup Location" 
          />

          <label>Dropoff Location:</label>
          <input 
            type="text" 
            value={dropoffLocation} 
            onChange={(e) => setDropoffLocation(e.target.value)} 
            placeholder="Enter Dropoff Location" 
          />

          <label>Number of Passengers:</label>
          <input 
            type="number" 
            min="1" 
            value={numberOfPassengers} 
            onChange={(e) => setNumberOfPassengers(e.target.value)} 
          />

          <label>Date:</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />

          <button className='velo' type="submit">Search for Car Pools</button>
        </form>

        <div className="available-pools">
          {/* Logic to display available pooling options goes here */}
          <div className="pool-card">
            <h3>Ride from Vijayawada to VIT AP University</h3>
            <p>Driver: John Doe</p>
            <p>Price: ₹500 per person</p>
            <p>Available Seats: 2</p>
            <button className='velo'>Join Pool</button>
          </div>
          <div className="pool-card">
            <h3>Ride from Vijayawada to Amrita University</h3>
            <p>Driver: Jane Smith</p>
            <p>Price: ₹600 per person</p>
            <p>Available Seats: 1</p>
            <button className='velo'>Join Pool</button>
          </div>
        </div>

        <section className="benefits">
          <h2>Benefits of Car Pooling</h2>
          <ul>
            <li>Cost-effective: Save money by sharing rides.</li>
            <li>Eco-friendly: Reduce your carbon footprint.</li>
            <li>Community building: Meet new people along the way.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CarPullingPage;
