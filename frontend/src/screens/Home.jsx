import React from "react";
import Account from "./Account";
import Offer from "../components/Offer";
import AllCategory from "../components/AllCategory";

function Home(props) {
  return (
    <>
      <div className="container-fluid bgImg mt-5">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.powerlook.in/_next/image?url=https%3A%2F%2Fcdn-media.powerlook.in%2Fcatalog%2Fcategory%2Fbottoms-category-4July.jpg&w=1920&q=75"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.powerlook.in/_next/image?url=https%3A%2F%2Fcdn-media.powerlook.in%2Fcatalog%2Fcategory%2Ft-shirts-category-4July.jpg&w=1920&q=75"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.powerlook.in/_next/image?url=https%3A%2F%2Fcdn-media.powerlook.in%2Fmycustomfolder%2Fbanner_4.jpg&w=1200&q=75"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="scroll-left shadow-lg">
              <p className="fs-4 ">Flat 40% Off for New Users!!!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="text-center mt-4">New Deals, <u className="text-danger">New Trends</u></h2>
        <div className="container m-4">
          <div className="row">
            <div className="col-sm-12">
              <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col ">
                  <div class="card shadow-lg">
                    <img
                      src="https://www.powerlook.in/_next/image?url=https%3A%2F%2Fcdn-media.powerlook.in%2Fmycustomfolder%2F4-1_1.jpg&w=640&q=75"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-lg">
                    <img
                      src="https://www.powerlook.in/_next/image?url=https%3A%2F%2Fcdn-media.powerlook.in%2Fmycustomfolder%2F5_3__1.jpg&w=640&q=75"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-lg">
                    <img
                      src="https://www.powerlook.in/_next/image?url=https%3A%2F%2Fcdn-media.powerlook.in%2Fmycustomfolder%2F5_3__1.jpg&w=640&q=75"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-lg">
                    <img
                      src="https://www.powerlook.in/_next/image?url=https%3A%2F%2Fcdn-media.powerlook.in%2Fmycustomfolder%2F4-1_1.jpg&w=640&q=75"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <AllCategory />
        <hr />
        <Offer />
        <Account />

      </div>
    </>
  );
}

export default Home;
