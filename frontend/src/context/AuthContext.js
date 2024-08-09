// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loginFormData, setLoginFormData] = useState({});
  const [registerFormData, setRegisterFormData] = useState({});
  const [loginMessage, setLoginMessage] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getSessionToken();
  });

  const getSessionToken = () => {
    // debugger;
    const token = sessionStorage.getItem("token");
    console.log(token);
    if (token) {
      setStatus(true);
    }
  };
  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3100/api/login",
        loginFormData
      );

      const { token, message } = response.data;

      if (token) {
        sessionStorage.setItem("token", token);
      }

      setStatus(true);

      Swal.fire({
        title: "Login Successful",
        text: setLoginMessage(message),
        icon: "success",
      });

      setTimeout(() => {
        navigate("/");
        setLoginMessage(" ");
      }, 1500);
    } catch (error) {
      setLoginMessage(
        error.response ? error.response.data.message : "Login failed"
      );
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
      });
    }
  };

  const register = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3100/api/register",
        registerFormData
      );
      setRegisterMessage(response.data.message);

      setTimeout(() => {
        navigate("/account/login");
        setRegisterMessage(" ");
      }, 1500);
    } catch (error) {
      setRegisterMessage(
        error.response ? error.response.data.message : "Registration failed"
      );
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");

    setLoginFormData({});
    setRegisterFormData({});
    setLoginMessage("");
    setRegisterMessage("");
    setStatus(false);

    setTimeout(() => {
      navigate("/account/login");
    }, 1000);

    // getToken()
  };

  const getToken = () => {
    return sessionStorage.getItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        loginFormData,
        setLoginFormData,
        registerFormData,
        setRegisterFormData,
        loginMessage,
        setLoginMessage,
        registerMessage,
        setRegisterMessage,
        login,
        register,
        logout,
        getToken,
        status,
        getSessionToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
