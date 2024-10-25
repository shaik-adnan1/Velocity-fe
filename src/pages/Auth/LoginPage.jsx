import { useState } from "react";
import PhoneInput from "../../components/phone-input";
import { Button } from "../../components/ui/button";
import { sendOtpService } from "../../api/SendOtpCall";
import { useNavigate } from "react-router-dom";
import car from "../../Images/car.jpeg";
import logo from "../../Images/logo.jpeg";
import toast from "react-hot-toast";
import "./Login.css";
import HashLoader from "react-spinners/HashLoader";
// import { useToast } from "../../hooks/use-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNumberChange = (number) => {
    setPhoneNumber(number);
  };

  const handleSubmit = async (number) => {
    setLoading(true);
    // const res = await sendOtpService(number);
    console.log(number);
    toast.success("Otp send Successfully");
    if (true) {
      setLoading(false);
      navigate("/otp");
    } else {
      setLoading(false);
      toast.error("Failed to send Otp");
    }
  };

  return (
    <div className="main-div">
      <div className="img-container">
        <img src={car} alt="car" className="img" />
      </div>
      <div className="form-wrapper">
        <div className="form-container">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <h2>Enter Your Mobile Number</h2>
            <h2>here?</h2>
          </div>
          <PhoneInput
            className="phone-input"
            placeholder="Enter a phone number"
            onChange={handleNumberChange}
          />
          <Button
            className="login-button"
            onClick={() => handleSubmit(phoneNumber)}
          >
            {loading ? (
              <HashLoader color="white" className="loader" size={16} />
            ) : (
              "Send Otp"
            )}
          </Button>
        </div>
        <div className="credits-wrapper">
          <i className="credits">
            ©️ 2024 VeloCity. All Rights Reserved. VeloCity is a registered
            trademark. Unauthorized use or duplication of this material without
            express and written permission is strictly prohibited. | Developed
            by Yousuf Adnan Shaik & Yashwanth P | Privacy Policy | Terms of
            Service
          </i>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
