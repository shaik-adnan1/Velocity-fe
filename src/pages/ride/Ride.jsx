import './Ride.css';
import { useState, useRef } from 'react';
import { Box, SkeletonText } from '@chakra-ui/react';
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';

const center = { lat: 48.8584, lng: 2.2945 }; // Default center coordinates (Eiffel Tower)

const RidePage = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Replace with your actual API key
    libraries: ['places'],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const originRef = useRef();
  const destinationRef = useRef();

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute(event) {
    event.preventDefault(); // Prevent form submission
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
  }

  return (
    <div className="ride-container">
      <div className="ride-form">
        <h2>Get a ride</h2>
        <form onSubmit={calculateRoute}>
          <label>Pickup location</label>
          <input type="text" placeholder="Pickup location" ref={originRef} />

          <label>Dropoff location</label>
          <input type="text" placeholder="Dropoff location" ref={destinationRef} />

          <label>Pickup time</label>
          <select className='velo'>
            <option>Pickup now</option>
            <option>Schedule for later</option>
          </select>

          <label>For</label>
          <select className='velo'>
            <option>For me</option>
            <option>For someone else</option>
          </select>

          <button type="submit">Search</button>
        </form>
      </div>

      <div className="ride-map">
        <Box position="relative" h="100%" w="100%">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '500px' }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </Box>
      </div>
    </div>
  );
};

export default RidePage;
