// Register.js
import React from "react";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { registerFormData, setRegisterFormData, registerMessage, setRegisterMessage, register } = useAuth();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    register();
  };

  return (
    <div className="container">
      <form className="form-control" onSubmit={onHandleSubmit}>
        <h1 className="text-center text-danger m-2">Register</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            onChange={onHandleChange}
            type="text"
            className="form-control"
            id="name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            onChange={onHandleChange}
            className="form-control"
            id="exampleInputEmail1"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            onChange={onHandleChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div>{registerMessage}</div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Register;
