import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ component }) => {
  const { accessToken } = useSelector((state) => state.user);

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return component;
};

export default AuthGuard;
