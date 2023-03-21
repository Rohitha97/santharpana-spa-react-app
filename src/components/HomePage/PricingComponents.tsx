import React from "react";
import AppoinmentComponents from "./AppoinmentComponents";

function PricingComponents() {
  return (
    <>
      <section className="section service gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2>Special Pricing</h2>
                <div className="divider mx-auto my-4"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className=" d-flex align-items-center">
                  <h4 className="mt-1 mb-3">Head & Shoulder Massage</h4>
                </div>

                <div className="content">
                  <p className="mb-1">40 - 50 Minute Sessions</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className=" d-flex align-items-center">
                  <h4 className="mt-1 mb-3">Foot Massage</h4>
                </div>

                <div className="content">
                  <p className="mb-1">40 - 50 Minute Sessions</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className=" d-flex align-items-center">
                  <h4 className="mt-1 mb-3">Seerodara</h4>
                </div>

                <div className="content">
                  <p className="mb-1">10 - 20 Minute Sessions</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className=" d-flex align-items-center">
                  <h4 className="mt-1 mb-3">Steam bath</h4>
                </div>

                <div className="content">
                  <p className="mb-1">10 - 20 Minute Sessions</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className=" d-flex align-items-center">
                  <h4 className="mt-1 mb-3">Full Body Massage</h4>
                </div>

                <div className="content">
                  <p className="mb-1">60 - 70 Minute Sessions </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className=" d-flex align-items-center">
                  <h4 className="mt-1 mb-3">Sauna</h4>
                </div>

                <div className="content">
                  <p className="mb-1">10 - 20 Minute Sessions </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingComponents;
