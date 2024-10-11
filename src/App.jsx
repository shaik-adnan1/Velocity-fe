import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import RideDetails from './pages/RideDetails';
import CreateRide from './pages/CreateRide';
import Profile from './pages/Profile';
import Ride from './pages/Ride';
import Drive from './pages/Drive';
import Bussiness from './pages/Bussiness';
import CarPullingPage from './pages/CarPulling';
import Navbar from './components/Navbar'
import About from './pages/Aboutpage'
import Help from './pages/Help';
import Language from './pages/En';


// import Navbar from './components/Navbar'; // Uncommented to add navigation

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/ride/:id" element={<RideDetails />} />
        <Route path="/create" element={<CreateRide />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ride" element={<Ride />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/carpulling" element={<CarPullingPage />} />
        <Route path="/bussiness" element={<Bussiness />} />
        <Route path="/About" element={<About />} />
        <Route path="/Language" element={<Language />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
