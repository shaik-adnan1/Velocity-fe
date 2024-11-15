import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userDetails: null,
  error: null,
  currentLocation: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.userDetails = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userDetails = null;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setCurrentLocation(state, action) {
      const { latitude: lat, longitude: lng } = action.payload;
      state.currentLocation = { lat, lng };
    },
  },
});

export const { loginSuccess, logout, setError, setCurrentLocation } =
  userSlice.actions;
export default userSlice.reducer;
