import { useState, useRef } from 'react';
import { Box, SkeletonText, Text } from "@chakra-ui/react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from '@react-google-maps/api';
import './Home.css';

const center = { lat: 48.8584, lng: 2.2945 };

const HomePage = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Updated
    libraries: ['places'],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const originRef = useRef();
  const destinationRef = useRef();

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
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
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = '';
  }

  return (
    <div className="homepage">
      <main className="main-content">
        <div className="glass-container">
          <div className="form-container">
            <h1>Go anywhere with Velocity</h1>
            <p>Request a ride, hop in, and go.</p>
            <form className="location-form">
              <input type="text" placeholder="Enter location" ref={originRef} />
              <input
                type="text"
                placeholder="Enter destination"
                ref={destinationRef}
              />
              <button type="button" onClick={calculateRoute}>
                See prices
              </button>
              <button type="button" onClick={clearRoute}>
                Clear Route
              </button>
            </form>
            <div className="info">
              <Text>Distance: {distance}</Text>
              <Text>Duration: {duration}</Text>
            </div>
          </div>
          <div className="map-container">
            {/* Google Map Box */}
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
      </main>
    </div>
  );
};

export default HomePage;
