import React from "react";
import AppoinmentComponents from "./AppoinmentComponents";
import { Services, servicesCard } from "../../DataModel/ServicesModel";
import { Link } from "react-router-dom";

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
              <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="service-item mb-4">
                  <div className="align-items-center">
                    <h4 className="mt-1 mb-2">{services.name}</h4>
                  </div>
                  <div className="content">
                    <p className="mb-2">{services.timeslot}</p>
                  </div>
                  <Link
                    style={{ width: "240px" }}
                    className="btn btn-outline-dark btn-round-full rounded-5"
                    to={{
                      pathname: "/description",
                      search: `?name=${encodeURIComponent(
                        services.name
                      )}&description=${encodeURIComponent(
                        services.description
                      )}&imgSrc=${encodeURIComponent(services.imgSrc)}`,
                    }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    More About Treatment
                  </Link>
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
