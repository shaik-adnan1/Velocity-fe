import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentLocation } from "./locationActions";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    currentLocation: null,
    error: null,
    loading: false,
    isMarked: true,
  },
  reducers: {
    setIsMarked(state, action) {
      state.isMarked = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentLocation.pending, (state) => {
        console.log("location fetch fulfilled");
        state.loading = true;
      })
      .addCase(fetchCurrentLocation.fulfilled, (state, action) => {
        console.log("location fetch fulfilled");
        state.currentLocation = {
          lat: action.payload.lat,
          lng: action.payload.lng,
        };
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCurrentLocation.rejected, (state, action) => {
        console.log("location fetch fulfilled");
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setIsMarked } = locationSlice.actions;
export default locationSlice.reducer;
