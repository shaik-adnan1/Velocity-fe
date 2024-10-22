import { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { verifyOtpService } from "../../api/VerifyOtpCall";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const OtpVerify = async (OTP) => {
    const res = await verifyOtpService(OTP);
    console.log(res);
    if (res.status == "Success") {
      console.log("navigating to profile");
      navigate("/profile");
    } else {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <div className="space-y-2 h-screen flex flex-col items-center justify-center gap-3">
      <InputOTP maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button onClick={() => OtpVerify(otp)}>Verify</Button>
    </div>
  );
};

export default OtpPage;
