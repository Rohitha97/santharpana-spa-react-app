import React from "react";
import { Services, servicesCard } from "../../DataModel/ServicesModel";

function ServicesComponents() {
  return (
    <>
      <section className="section service-2">
        <div className="container">
          <div className="row">
            {servicesCard.map((services, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-block mb-5">
                  <img
                    src={services.imgSrc}
                    alt={services.name}
                    className="img-fluid"
                    style={{ height: "240px" }}
                  />
                  <div className="content">
                    <h4 className="mt-4 mb-5 title-color">{services.name} </h4>
                    <p className="mb-5"> </p>
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

export default ServicesComponents;
