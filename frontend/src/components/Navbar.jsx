import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { loginFormData, registerFormData, logout,  getSessionToken } = useAuth();

  const isLoggedIn =  getSessionToken && loginFormData.email;

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="img-fluid"
              src="https://www.powerlook.in/_next/image?url=%2Fimages%2FLogo%2Fpl-logo.png&w=256&q=75"
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {!isLoggedIn ? (
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/account/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/account/register">
                        Register
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Hi, {loginFormData.name}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link onClick={logout} className="dropdown-item">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
