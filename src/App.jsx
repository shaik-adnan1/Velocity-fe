import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SearchResults from "./pages/searchresults/SearchResults";
import RideDetails from "./pages/rideDetails/RideDetails";
import CreateRide from "./pages/createRide/CreateRide";
import Profile from "./pages/Profile";
import Ride from "./pages/ride/Ride";
import Drive from "./pages/drive/Drive";
import Bussiness from "./pages/business/Bussiness";
import CarPullingPage from "./pages/carpooling/CarPulling";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/Aboutpage";
import Help from "./pages/help/Help";
import Language from "./pages/en/En";

// import Navbar from './components/Navbar'; // Uncommented to add navigation
//Bacteria

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
