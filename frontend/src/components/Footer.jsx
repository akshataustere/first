import React from "react";

function Footer(props) {
  return (
    <div>
      <hr />
      <nav class="navbar bg-body-tertiary mt-5 ">
        <div class="container-fluid me-auto align-items-center">
          <div className="row">
            <div className="col-sm-3">
              <img
                className="img-fluid mb-3"
                src="https://www.powerlook.in/_next/image?url=%2Fimages%2FLogo%2Fpl-logo.png&w=256&q=75"
                alt=""
              />

              <p className="px-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
                quidem! Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Commodi, nisi?
              </p>
            </div>

            <div className="col-sm-4">
              <ul class="list-group text-center list-unstyled">
                <h5>Quick Links One</h5>
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
            <div className="col-sm-2">
              <ul class="list-group text-center list-unstyled">
                <h5>Quick Links One</h5>
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
            <div className="col-sm-2">
              <ul class="list-group text-center list-unstyled">
                <h5>Quick Links One</h5>
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
