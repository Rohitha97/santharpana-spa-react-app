import React from "react";

function contactCards() {
  return (
    <>
      <section className="section contact-info pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-live-support"></i>
                <h5>Call Us</h5>
                +94 70 662 6139
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-support-faq"></i>
                <h5>Email Us</h5>
                <a href="mailto:santharpanaspa@gmail.com">
                  santharpanaspa@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-location-pin"></i>
                <h5>Location</h5>
                <a href="https://goo.gl/maps/AmRn53RPKU83NJRr9">
                  No.43, Rotaryagama, Inamaluwa, Sigiriya, Sri Lanka
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default contactCards;
