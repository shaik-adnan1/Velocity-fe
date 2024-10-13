import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Assuming you have this CSS file for styles

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/Home"><div className="logo">Velocity</div></Link>
      <nav>
        <Link to="/ride">Ride</Link>
        <Link to="/drive">Drive</Link>
        <Link to="/carpulling">Car Pulling</Link>
        <Link to="/bussiness">business</Link>
        <Link to="/about">about</Link>
      </nav>
      <div className="nav-right">
        <a href="/Help"><FontAwesomeIcon icon={faQuestionCircle} /> Help</a>
        <a href="/language"><FontAwesomeIcon icon={faGlobe} /> EN</a>
        <a href="#" className="login-btn">Log in</a>
        <button className="signup-btn">Sign up</button>
      </div>
    </header>
  );
};

export default Navbar;
