import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../index.css";
import { MdEmail, MdWrongLocation } from "react-icons/md";
import { GoGrabber } from "react-icons/go";

function NavBar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  const closeNavLinks = () => {
    setShowNavLinks(false);
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
        <nav className={`navbar navbar-expand-lg navigation flex-lg-column-reverse ${scrolled ? "scrolled" : ""}`} id="navbar" style={{ position: "sticky", top: 0, zIndex: 1000 }}>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="images/logo.png" alt="" className="logo-img img-fluid" />
            </a>

            <GoGrabber size={40} color="#4b1e3d" onClick={toggleNavLinks} className="d-lg-none" style={{ cursor: "pointer" }} />

            <div className={`collapse navbar-collapse flex-row-reverse ${showNavLinks ? "show" : ""}`} id="navbarmain">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" end onClick={closeNavLinks}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services" onClick={closeNavLinks}>
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/appoinment" onClick={closeNavLinks}>
                    Appointment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" onClick={closeNavLinks}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" onClick={closeNavLinks}>
                    Contact
                  </NavLink>
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
