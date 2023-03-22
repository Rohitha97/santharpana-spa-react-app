import React from "react";
import { ServiceGallery, servicesImg } from "../../DataModel/GalleryModel";

function GalleryComponents() {
  return (
    <>
      <section className="section team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="mb-4">Gallery</h2>
                <div className="divider mx-auto my-4"></div>
              </div>
            </div>
          </div>

          <div className="row">
            {servicesImg.map((services, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 mb-4" key={index}>
                <div className="team-block mb-5 mb-lg-0">
                  <img src={services.imgSrc} className="img-fluid w-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryComponents;
