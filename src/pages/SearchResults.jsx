import React from 'react';
import { useLocation } from 'react-router-dom';
import RideCard from '../components/RideCard';

const SearchResults = () => {
  const location = useLocation();
  const { departure, destination, date } = location.state;

  // Here you would make an API call to fetch search results
  const rides = [
    { id: 1, driver: 'John Doe', price: 20, seats: 3 },
    { id: 2, driver: 'Jane Smith', price: 15, seats: 2 },
  ];

  return (
    <div>
      <h2>Available Rides from {departure} to {destination} on {date}</h2>
      {rides.map((ride) => (
        <RideCard key={ride.id} ride={ride} />
      ))}
    </div>
  );
};

export default SearchResults;
