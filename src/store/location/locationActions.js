import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrentLocation = createAsyncThunk(
  "location/fetchCurrentLocation",
  async (_, { rejectWithValue }) => {
    try {
      if (!navigator.geolocation) {
        return rejectWithValue("Geolocation is not supported by this browser");
      }

      if (navigator.geolocation) {
        const location = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            (error) => {
              reject(error);
            }
          );
        });
        console.log("lat n lng", location);
        return location;
      }
    } catch (error) {
      return rejectWithValue(error.message || "Unable to fetch location");
    }
  }
);
