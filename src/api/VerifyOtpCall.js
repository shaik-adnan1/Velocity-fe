import axios from "axios";

export const verifyOtpService = async (code) => {
  try {
    const result = await axios.post(
      "http://localhost:8000/api/v1/signup/otp/verify",
      {
        code: code,
      }
    );
    return result?.data;
  } catch (error) {
    console.log(error);
  }
};
