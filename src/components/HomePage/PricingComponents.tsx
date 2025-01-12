import React from "react";
import AppoinmentComponents from "./AppoinmentComponents";
import { Services, servicesCard } from "../../DataModel/ServicesModel";
import { Link } from "react-router-dom";
import "./PricingComponents.css";

function PricingComponents() {
  return (
    <>
      <section className="section service gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title responsive-title">
                {" "}
                {/* Add a class here */}
                <h2>Special Pricing</h2>
                <div className="divider mx-auto my-4"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {servicesCard.map((service, index) => (
              <div className="col-6 col-sm-6 col-md-6 col-lg-4" key={index}>
                <Link
                  to={{
                    pathname: "/description",
                    search: `?name=${encodeURIComponent(service.name)}&description=${encodeURIComponent(service.description)}&imgSrc=${encodeURIComponent(service.imgSrc)}`,
                  }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="service-item mb-4 responsive-card">
                    {" "}
                    {/* Add a class here */}
                    <div className="align-items-center">
                      <h4 className="mt-1 mb-2 responsive-text">{service.name}</h4> {/* Add a class here */}
                    </div>
                    <div className="content">
                      <p className="mb-2 responsive-text">{service.timeslot}</p> {/* Add a class here */}
                    </div>
                    <div className="service-price">
                      <h4 className="price responsive-text">{service.price}</h4> 
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingComponents;
