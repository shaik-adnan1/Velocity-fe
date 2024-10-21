import "./Drive.css";
import Drive from "../../Images/drive.jpg";

const DrivePage = () => {
  return (
    <div className="drive-container">
      <div className="drive-header">
        <h1>Drive with Velocity</h1>
        <p>Earn money on your schedule by driving with us.</p>
      </div>
      <div className="drive-content">
        <div className="drive-info">
          <h2>Why Drive with Us?</h2>
          <ul>
            <li>Flexible hours</li>
            <li>Competitive earnings</li>
            <li>Drive your own car</li>
            <li>Access to exclusive driver perks</li>
          </ul>
          <button className="drive-btn">Sign Up to Drive</button>
        </div>
        <div className="drive-image">
          <img src={Drive} alt="Driving with Velocity" />
        </div>
      </div>
      9000823430
    </div>
  );
};

export default DrivePage;
