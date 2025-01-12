import React, { useState } from "react";
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
              {/* Hide on mobile, show on large screens and above */}
              <div className="col-lg-8 d-none d-lg-block">
                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                  <li className="list-inline-item">
                    <a href="mailto:gaminianilkumara@gmail.com">
                      <MdEmail color="white" size={"20px"} /> gaminianilkumara@gmail.com
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a aria-label="Address" href="https://maps.app.goo.gl/agdzNa4x1hKDppHg9">
                      <MdWrongLocation color="white" size={"15px"} /> Address No.43, Rotaryagama, Inamaluwa - Sigiriya
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                  <a aria-label="Chat on WhatsApp" href="https://wa.me/+94762436139">
                    <span>Chat on WhatsApp : </span>
                    {/* This will show on medium (md) and larger devices */}
                    <span className="h4 d-none d-md-inline">+94 76 243 6139</span>
                    {/* This will show on smaller devices (below md) */}
                    <span className="h6 d-inline d-md-none">+94 76 243 6139</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navigation flex-lg-column-reverse" id="navbar">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="images/logo.png" alt="" className="logo-img img-fluid" />
            </a>

            <GoGrabber size={40} color="#4b1e3d" onClick={toggleNavLinks} className="d-lg-none" />

            <div className={`collapse navbar-collapse flex-row-reverse ${showNavLinks ? "show" : ""}`} id="navbarmain">
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
