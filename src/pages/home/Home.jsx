// ---- imports -----
import { useState, useEffect, useRef } from "react";
import { Box, SkeletonText, Text } from "@chakra-ui/react";
import { HashLoader, ClimbingBoxLoader } from "react-spinners";

// Maps
import {
  useJsApiLoader,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "./Home.css";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

// redux
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentLocation } from "../../store/location/locationActions";

// ------ logic -------
const googleMapsLibraries = ["places", "marker"];
const HomePage = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const { currentLocation, loading } = useSelector((state) => state.location);
  const dispatch = useDispatch();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Updated
    libraries: googleMapsLibraries,
  });

  useEffect(() => {
    dispatch(fetchCurrentLocation());
  }, [dispatch]);

  const originRef = useRef();
  const destinationRef = useRef();

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
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
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  console.log("current location from store", currentLocation);

  return (
    <div className="homepage">
      <main className="main-content">
        <div className="glass-container">
          <div className="form-container">
            <h1>Go anywhere with Velocity</h1>
            <p>Request a ride, hop in, and go.</p>
            <form className="location-form">
              <Autocomplete>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md" // Full width with padding, border, and rounded corners
                  placeholder="Enter origin"
                  ref={originRef}
                />
              </Autocomplete>
              <Autocomplete>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md" // Full width with padding, border, and rounded corners
                  placeholder="Enter destination"
                  ref={destinationRef}
                />
              </Autocomplete>
              <button
                type="button"
                onClick={calculateRoute}
                className="mt-4 p-2 bg-green-500 text-white rounded-md"
              >
                See prices
              </button>
              <button
                type="button"
                onClick={clearRoute}
                className="mt-2 p-2 bg-gray-500 text-white rounded-md"
              >
                Clear Route
              </button>
            </form>
            <div className="info">
              <Text>
                Distance:{" "}
                {distance && (
                  <HashLoader color="black" className="loader z-50" size={20} />
                )}
              </Text>
              {loading && (
                <HashLoader color="black" className="loader z-50" size={20} />
              )}
              <Text>
                Duration:{" "}
                {duration && (
                  <HashLoader color="black" className="loader z-50" size={20} />
                )}
              </Text>
            </div>
          </div>
          <div className="map-container">
            {/* Google Map Box */}
            <Box position="relative" h="100%" w="100%">
              <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <Map
                  defaultCenter={currentLocation}
                  defaultZoom={19}
                  gestureHandling={"greedy"}
                  disableDefaultUI={true}
                >
                  {currentLocation && <Marker position={currentLocation} />}
                  {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                  )}
                </Map>
              </APIProvider>
            </Box>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
