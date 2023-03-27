import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Services, servicesCard } from "../../DataModel/ServicesModel";
import Button from "react-bootstrap/Button";
import DescriptionModal from "./Description";
import { Modal } from "react-bootstrap";

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
                    <h4 className="mt-4 mb-4 title-color">{services.name} </h4>
                  </div>
                  <Link
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

export default ServicesComponents;
