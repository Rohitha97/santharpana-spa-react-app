import React from "react";
import AppoinmentComponents from "./AppoinmentComponents";
import { Services, servicesCard } from "../../DataModel/ServicesModel";

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
            {servicesCard.map((services, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-4">
                  <div className=" d-flex align-items-center">
                    <h4 className="mt-1 mb-3">{services.name}</h4>
                  </div>
                  <div className="content">
                    <p className="mb-1">{services.timeslot}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingComponents;
