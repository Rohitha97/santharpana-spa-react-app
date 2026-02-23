import { servicesCard } from "../../DataModel/ServicesModel";
import { Link } from "react-router-dom";
import "./PricingComponents.css";

function PricingComponents() {
  return (
    <>
      <section className="section service gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <span className="subtitle d-block mb-3">What We Offer</span>
                <h2>Our Treatments</h2>
                <div className="divider mx-auto mt-3"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {servicesCard.map((service, index) => (
              <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-4" key={index}>
                <Link
                  to={{
                    pathname: "/description",
                    search: `?name=${encodeURIComponent(service.name)}&description=${encodeURIComponent(service.description)}&imgSrc=${encodeURIComponent(service.imgSrc)}&price=${encodeURIComponent(service.price)}`,
                  }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="service-item responsive-card">
                    <h4 className="responsive-text">{service.name}</h4>
                    <p className="responsive-text">{service.timeslot}</p>
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
