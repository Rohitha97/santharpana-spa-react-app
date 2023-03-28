import React, { useState } from "react";
import index from "index.css";
import { Link } from "react-router-dom";
import "../../index.css";
import { MdEmail, MdWrongLocation } from "react-icons/md";
import { GoGrabber } from "react-icons/go";

function NavBar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

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
                      <MdEmail color="white" size={"20px"} />{" "}
                      santharpanaspa@gmail.com
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <MdWrongLocation color="white" size={"15px"} /> Address
                    No.43, Rotaryagama, Inamaluwa - Sigiriya
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
            <a className="navbar-brand" href="/">
              <img
                src="images/logo.png"
                alt=""
                className="logo-img img-fluid"
              />
            </a>

            <GoGrabber
              size={40}
              color="#4b1e3d"
              onClick={toggleNavLinks}
              className="d-lg-none"
            />

            <div
              className={`collapse navbar-collapse flex-row-reverse ${
                showNavLinks ? "show" : ""
              }`}
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
                    Appointment
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
