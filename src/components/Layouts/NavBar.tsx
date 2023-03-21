import React from "react";
import index from "index.css";
import { Link } from "react-router-dom";
import "../../index.css";

function NavBar() {
  return (
    <>
      <header>
        <div className="header-top-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                  <li className="list-inline-item">
                    <a href="mailto:santharpanaspa@gmail.com">
                      <i className="icofont-support-faq mr-2"></i>
                      santharpanaspa@gmail.com
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <i className="icofont-location-pin mr-2"></i>Address No.43,
                    Rotaryagama, Inamaluwa - Sigiriya
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                  <a href="tel:+94706626139">
                    <span>Call Now : </span>
                    <span className="h4">+94 70 662 6139</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg navigation flex-lg-column-reverse"
          id="navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img
                src="images/logo.png"
                alt=""
                className="logo-img img-fluid"
              />
            </a>

            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarmain"
              aria-controls="navbarmain"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icofont-navigation-menu"></span>
            </button>

            <div
              className="collapse navbar-collapse flex-row-reverse"
              id="navbarmain"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/appoinment">
                    Appoinment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
