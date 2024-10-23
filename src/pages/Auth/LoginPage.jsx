import { useState } from "react";
import PhoneInput from "../../components/phone-input";
import { Button } from "../../components/ui/button";
import { sendOtpService } from "../../api/SendOtpCall";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { useToast } from "../../hooks/use-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNumberChange = (number) => {
    setPhoneNumber(number);
  };

  const handleSubmit = async (number) => {
    // const res = await sendOtpService(number);
    console.log(number);
    toast.success("Otp send Successfully");
    if (true) {
      navigate("/otp");
    } else {
      toast.error("Failed to send Otp");
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
