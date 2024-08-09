import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({ element, ...rest }) {
  const { getToken } = useAuth();
  const token = getToken();

  return token ? element : <Navigate to="/account/login" />;
}

export default ProtectedRoute;
