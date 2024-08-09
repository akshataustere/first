import React from "react";
import Account from "./Account";

function StaticHome(props) {
  return (
    <div className="container-fluid mt-5">
      <h1 className="mt-5 text-center p-4">
        Style <span className="text-danger">Ahead!</span>
      </h1>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="row ">
          <div className="col-sm-12 justify-content-center align-items-center">
            <img
              className="img-fluid ms-auto"
              src="https://img.freepik.com/free-photo/purchase-sale-discount-fashion-style_53876-15282.jpg?t=st=1722841534~exp=1722845134~hmac=714c41ccc8f8e9ab15eb73e94aa663e584f65b2a0701f1ac2fbb50a68c6ecff6&w=826"
              alt=""
            />
          </div>
        </div>

        <Account />
      </div>
    </div>
  );
}

export default StaticHome;
