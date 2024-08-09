// Login.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const {
    loginFormData,
    setLoginFormData,
    loginMessage,
    setLoginMessage,
    login,
  } = useAuth();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="container">
      <form onSubmit={onHandleSubmit}>
        <h1 className="text-center text-danger">Login</h1>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={onHandleChange}
            name="name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={onHandleChange}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            onChange={onHandleChange}
            className="form-control"
          />
        </div>
        <div>
          <span className="bg-dark text-white">{loginMessage}</span>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        
        <div>
        <Link className="text-decoration-none" to='/forgot-password'>Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
