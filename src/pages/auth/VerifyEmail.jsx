import React from "react";
import OtpScreen from "../../components/OTP/OtpScreen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VerifyEmail() {
  const notifySuccess = () => toast.success("Email verified successfully");
  const notifyError = () => toast.error("Failed to verify email");

  return (
    <>
      <OtpScreen onSuccess={notifySuccess} onError={notifyError} />
      <ToastContainer />
    </>
  );
}

export default VerifyEmail;
