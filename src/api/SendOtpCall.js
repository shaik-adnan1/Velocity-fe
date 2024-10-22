import axios from "axios";

export const sendOtpService = async (number) => {
  try {
    const result = await axios.post("http://localhost:8000/api/v1/signup/otp", {
      number: number,
    });
    return result?.data;
  } catch (error) {
    console.log(error);
  }
};
