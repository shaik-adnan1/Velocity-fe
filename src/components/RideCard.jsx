import React from 'react';
import { Link } from 'react-router-dom';

const RideCard = ({ ride }) => {
  return (
    <div>
      <h3>Driver: {ride.driver}</h3>
      <p>Price: ${ride.price}</p>
      <p>Seats Available: {ride.seats}</p>
      <Link to={`/ride/${ride.id}`}>View Details</Link>
    </div>
  );
};

export default RideCard;
