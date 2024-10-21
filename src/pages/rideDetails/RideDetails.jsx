import { useParams } from 'react-router-dom';

const RideDetails = () => {
  const { id } = useParams();

  // Here you would make an API call to fetch ride details by ID
  const ride = {
    id,
    driver: 'John Doe',
    vehicle: 'Toyota Prius',
    seats: 3,
    price: 20,
    date: '2024-09-28',
  };

  return (
    <div>
      <h2>Ride Details</h2>
      <p>Driver: {ride.driver}</p>
      <p>Vehicle: {ride.vehicle}</p>
      <p>Seats: {ride.seats}</p>
      <p>Price: ${ride.price}</p>
      <p>Date: {ride.date}</p>
    </div>
  );
};

export default RideDetails;
