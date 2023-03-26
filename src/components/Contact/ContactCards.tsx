import React from "react";
import {
  MdAlternateEmail,
  MdSupportAgent,
  MdWrongLocation,
} from "react-icons/md";
import { Link } from "react-router-dom";

function contactCards() {
  return (
    <>
      <section className="section contact-info pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div
                className="contact-block mb-4 mb-lg-0"
                style={{ paddingBottom: "74px" }}
              >
                <MdSupportAgent
                  color="#4b1e3d"
                  size={"40px"}
                  className="mb-3"
                />
                <h5>Call Us</h5>
                <Link to="tel:+94706626139">+94 70 662 6139</Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div
                className="contact-block mb-4 mb-lg-0"
                style={{ paddingBottom: "74px" }}
              >
                <MdAlternateEmail
                  color="#4b1e3d"
                  size={"40px"}
                  className="mb-3"
                />
                <h5>Email Us</h5>
                <Link to="mailto:santharpanaspa@gmail.com">
                  santharpanaspa@gmail.com
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <MdWrongLocation
                  color="#4b1e3d"
                  size={"40px"}
                  className="mb-3"
                />
                <h5>Location</h5>
                <Link to="https://goo.gl/maps/AmRn53RPKU83NJRr9">
                  No.43, Rotaryagama, Inamaluwa, Sigiriya, Sri Lanka
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default contactCards;
