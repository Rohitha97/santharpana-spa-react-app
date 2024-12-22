import { Link } from "react-router-dom";
import { servicesCard } from "../../DataModel/ServicesModel";
import "./ServicesComponents.css"; // Import the CSS

function ServicesComponents() {
  return (
    <section className="section service-2">
      <div className="container">
        <div className="row">
          {servicesCard.map((services, index) => (
            <div className="col-6 col-md-4 col-lg-4" key={index}>
              <div className="service-block mb-5">
                <img src={services.imgSrc} alt={services.name} className="img-fluid image-responsive" />
                <div className="content">
                  {/* Use h4 for SEO/semantic reasons but style it as h6 on mobile */}
                  <h4 className="mt-4 mb-4 title-color title-mobile">{services.name}</h4>
                </div>

                <Link
                  className="btn btn-outline-dark btn-round-full rounded-5 link-mobile"
                  to={{
                    pathname: "/description",
                    search: `?name=${encodeURIComponent(services.name)}&description=${encodeURIComponent(services.description)}&imgSrc=${encodeURIComponent(
                      services.imgSrc
                    )}&price=${encodeURIComponent(services.price)}`,
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
  );
}

export default ServicesComponents;
