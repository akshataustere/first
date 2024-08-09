import React from "react";

function Offer(props) {
  return (
    <div className="container shadow-lg d-flex flex-column justify-content-center align-items-center ms-auto me-auto p-5">
      <div className="row">
        <div className="col-sm-4">
          <img src="https://www.powerlook.in/images/quality.svg" alt="" />
          <h2 className="">Secure</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            earum.
          </p>
        </div>

        <div className="col-sm-4">
          <img
            src="https://www.powerlook.in/_next/image?url=%2Fimages%2Ficons-secure.png&w=32&q=75"
            alt=""
          />
          <h2 className="">Premium Quality</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            earum.
          </p>
        </div>

        <div className="col-sm-4">
          <img src="https://www.powerlook.in/images/icon-return.svg" alt="" />
          <h2 className="">7 Days Return</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            earum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offer;
