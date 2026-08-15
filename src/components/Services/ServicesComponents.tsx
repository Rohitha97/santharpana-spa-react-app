import { Link } from "react-router-dom";
import { servicesCard } from "../../DataModel/ServicesModel";
import "./ServicesComponents.css";
import { img } from "../../utils/image";

function ServicesComponents() {
  return (
    <section className="section service-2">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6 text-center">
            <span className="subtitle d-block mb-3">Holistic Healing</span>
            <h2 style={{ color: "var(--plum)" }}>All Treatments</h2>
            <div className="divider mx-auto mt-3"></div>
          </div>
        </div>
        <div className="row g-4">
          {servicesCard.map((service, index) => (
            <div className="col-6 col-md-4 col-lg-4" key={service.id}>
              <div className="service-block mb-2">
                <img
                  src={img(service.imgSrc)}
                  alt={service.name}
                  className="image-responsive"
                  width={600}
                  height={400}
                  /* The first row is above the fold on most screens */
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className="content">
                  <h4 className="title-mobile">{service.cardName}</h4>
                  <p className="service-duration">{service.timeslot}</p>
                  <Link
                    className="btn btn-outline-dark btn-round-full link-mobile"
                    to={`/services/${service.slug}`}
                    aria-label={`Learn more about ${service.name}`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesComponents;
