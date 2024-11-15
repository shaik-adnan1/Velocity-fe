# `Velocity`

## `A Ride sharing app, that doesn't eat up your pockets on your rides`

## `Store Configuration`

src/
├── app/
│ ├── store.js # Central store configuration
│ └── apiSlice.js # RTK Query base API slice (optional for APIs)
├── store/
│ ├── user/
│ │ ├── userSlice.js # Manages user-related state
│ │ └── userThunks.js # Handles async operations
│ ├── rides/
│ │ ├── rideSlice.js # Manages ride-related state
│ │ └── rideThunks.js # Handles async operations
│ ├── pricing/
│ │ └── pricingSlice.js # Manages dynamic pricing state
│ ├── notifications/
│ └── notificationSlice.js # Tracks notifications
├── components/
│ ├── Map/
│ │ └── Map.js # Map component
│ ├── RideBooking/
│ │ └── RideBooking.js # Ride booking form
│ └── DriverDashboard/
│ └── DriverDashboard.js # Driver management UI
└── App.js # Main app component
