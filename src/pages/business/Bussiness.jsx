import React from 'react';
import './Bussiness.css';
import handshake from '../../Images/hands-holding-puzzle-business-problem-solving-concept.jpg';

const BusinessPage = () => {
  return (
    <div className="business-container">
      <div className="business-header">
        <h1>Partner with Velocity</h1>
        <p>Grow your business by partnering with us and reaching millions of customers.</p>
      </div>
      <div className="business-content">
        <div className="business-info">
          <h2>Why Partner with Us?</h2>
          <p>
            Velocity helps businesses expand their reach, boost sales, and connect
            with customers across the globe.
          </p>
          <div className="business-features">
            <div className="feature">
              <h3>Global Reach</h3>
              <p>Gain access to a vast network of customers worldwide.</p>
            </div>
            <div className="feature">
              <h3>Seamless Integration</h3>
              <p>Our easy-to-use platform allows seamless integration with your business operations.</p>
            </div>
            <div className="feature">
              <h3>Dedicated Support</h3>
              <p>Receive 24/7 support to help you every step of the way.</p>
            </div>
          </div>
          <button className="business-btn">Join Us Today</button>
        </div>
        <div className="business-image">
          <img src={handshake} alt="Business Partnering" />
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
