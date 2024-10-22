import { useState } from "react";
import PhoneInput from "../../components/phone-input";
import { Button } from "../../components/ui/button";
import { sendOtpService } from "../../api/SendOtpCall";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNumberChange = (number) => {
    setPhoneNumber(number);
  };

  const handleSubmit = async (number) => {
    console.log("Send Otp")
    const res = await sendOtpService(number);
    if (res.status == "Success") {
      navigate("/otp");
    } else {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3">
      <PhoneInput
        placeholder="Enter a phone number"
        onChange={handleNumberChange}
      />
      <Button onClick={() => handleSubmit(phoneNumber)}>Send Otp</Button>
    </div>
  );
};

export default LoginPage;
