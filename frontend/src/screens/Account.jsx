import React from "react";
import { Link, Outlet } from "react-router-dom";



function Account(props) {
  return (
    <div className="container w-75 bgImg mt-5 p-5" >
      <h1 className="text-center">Account</h1>
      <div className="card text-center">
        <div className="card-header">
          <Link className="text-decoration-none" to="/account/login">
            Login
          </Link>
          <span className="separator"> | </span>
          <Link className="text-decoration-none" to="/account/register">
            Register
          </Link>
        </div>

        <div className="card-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Account;
