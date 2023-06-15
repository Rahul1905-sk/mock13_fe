import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("tokken");
  console.log({ token });
  if (token?.length > 0) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
