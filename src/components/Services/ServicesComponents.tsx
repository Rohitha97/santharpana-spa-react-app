import { Link } from "react-router-dom";
import { servicesCard } from "../../DataModel/ServicesModel";
import "./ServicesComponents.css";

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
            <div className="col-6 col-md-4 col-lg-4" key={index}>
              <div className="service-block mb-2">
                <img
                  src={service.imgSrc}
                  alt={service.name}
                  className="image-responsive"
                />
                <div className="content">
                  <h4 className="title-mobile">{service.name}</h4>
                  <Link
                    className="btn btn-outline-dark btn-round-full link-mobile"
                    to={{
                      pathname: "/description",
                      search: `?name=${encodeURIComponent(service.name)}&description=${encodeURIComponent(service.description)}&imgSrc=${encodeURIComponent(service.imgSrc)}&price=${encodeURIComponent(service.price)}`,
                    }}
                    onClick={() => window.scrollTo(0, 0)}
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
