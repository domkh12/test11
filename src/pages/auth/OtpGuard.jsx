import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const OtpGuard = ({ component }) => {
  const location = useLocation();
  const email = location.state?.email;

  if (!email) {
    return <Navigate to="/register" />;
  }

  return component;
};

export default OtpGuard;
