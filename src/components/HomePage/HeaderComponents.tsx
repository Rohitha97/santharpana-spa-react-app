import React from "react";
import { Link } from "react-router-dom";
import PricingComponents from "./PricingComponents";

function Header() {
  return (
    <>
      {" "}
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                <span className="text-uppercase text-sm letter-spacing ">
                  Keep calm and make a self-care plan
                </span>
                <h1 className="mb-3 mt-3">Your most trusted Ayurvedic Spa </h1>

                <p className="mb-4 pr-5">
                  It’s not selfish to love yourself, take care of yourself, and
                  to make your happiness a priority. It’s necessary.{" "}
                </p>
                <div className="btn-container ">
                  <Link
                    to="/appoinment"
                    className="btn btn-main-2 btn-icon btn-round-full rounded-5"
                  >
                    Make appoinment
                    <i className="icofont-simple-right ml-2  "></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-block d-lg-flex">
                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-ebook"></i>
                  </div>
                  <span>24 Hours Service</span>
                  <h4 className="mb-3">Online Appoinment</h4>
                  <p className="mb-4">
                    Sometimes the best thing to do is just call it a day and go
                    get a massage.
                  </p>
                  <Link
                    to="/appoinment"
                    className="btn btn-main btn-round-full rounded-5"
                  >
                    Make a appoinment
                  </Link>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-ui-clock"></i>
                  </div>
                  <span>Timing schedule</span>
                  <h4 className="mb-3">Working Hours</h4>
                  <ul className="w-hours list-unstyled">
                    <li className="d-flex justify-content-between">
                      Monday - Sunday <span>9:00 - 21:00</span>
                    </li>
                  </ul>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-support"></i>
                  </div>
                  <span>Contact</span>
                  <h4 className="mb-3">+94 70 662 6139</h4>
                  <ul className="list-inline footer-socials mt-4">
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/Santharpana-Ayurvedic-Garden-Spa-100482329280363/">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/santharpanaspa/">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-6">
              <div className="about-img">
                <img
                  src="images/about/img-1.jpg"
                  alt=""
                  className="img-fluid"
                />
                <img
                  src="images/about/img-2.jpg"
                  alt=""
                  className="img-fluid mt-4"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="about-img mt-4 mt-lg-0">
                <img
                  src="images/about/img-3.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-content pl-4 mt-4 mt-lg-0">
                <h2 className="title-color">
                  Personal care <br />& healthy living
                </h2>
                <p className="mt-4 mb-5">
                  Rest and your energy will be restored. We provide best leading
                  Spa services.
                </p>

                <Link
                  to="/services"
                  className="btn btn-main-2 btn-round-full btn-icon rounded-5"
                >
                  Services<i className="icofont-simple-right ml-3"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
