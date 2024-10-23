import { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { verifyOtpService } from "../../api/VerifyOtpCall";
import toast from "react-hot-toast";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const OtpVerify = async (OTP) => {
    // const res = await verifyOtpService(OTP);
    if (true) {
        toast.success('verified successfully');
    //   toast.promise(saveSettings(settings), {
    //     loading: "verifying otp",
    //     success: <b>Success</b>,
    //     error: <b>Failed</b>,
    //   });
      navigate("/profile");
    } else {
      toast.error("verification failed");
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
