import { Link } from "react-router-dom";
import PageHeader from "../Layouts/PageHeader";
import type { Services } from "../../DataModel/ServicesModel";
import { externalLink, site, whatsappLink } from "../../config/site";
import { img } from "../../utils/image";
import { track } from "../../utils/analytics";

/**
 * A single treatment. The service is passed in by the /services/<slug> route
 * rather than read from a query string, so this component has no failure mode
 * of its own — an unknown slug never reaches it.
 */
function Description({ service }: { service: Services }) {
  const paragraphs = service.description.split("\n").filter((line) => line.trim().length > 0);

  const bookMessage = `Hello Santharpana, I'd like to book the "${service.name}" (${service.timeslot}). Could you tell me the price and your available times?`;

  return (
    <>
      <PageHeader title={service.name} subtitle="Our Services" />
      <section className="section about">
        <div className="container">
          <div className="row align-items-start g-5">
            {/* Image */}
            <div className="col-lg-5 col-sm-10">
              {/*
                Treatment photos range from 1.0:1 to 1.83:1, so the old fixed
                800x1000 attributes described none of them and every page shifted
                as the image loaded. A fixed 3:2 box reserves the right space up
                front and gives all seven treatment pages the same proportions.
              */}
              <img
                src={img(service.imgSrc)}
                alt={service.name}
                className="img-fluid"
                width={900}
                height={600}
                decoding="async"
                style={{
                  borderRadius: "var(--r-lg)",
                  boxShadow: "var(--sh-lg)",
                  width: "100%",
                  aspectRatio: "3 / 2",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Content */}
            <div className="col-lg-7">
              <div className="about-content ps-lg-2">
                <span className="subtitle d-block mb-3">Treatment Details</span>
                {/* PageHeader above already carries the page's <h1> */}
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
                    color: "var(--plum)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {service.name}
                </h2>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "var(--plum-mist)",
                    border: "1px solid var(--border)",
                    borderLeft: "3px solid var(--terra)",
                    borderRadius: "var(--r-sm)",
                    padding: "10px 18px",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--terra)",
                    }}
                  >
                    Duration
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.4rem",
                      color: "var(--plum)",
                      fontWeight: 600,
                    }}
                  >
                    {service.timeslot}
                  </span>
                </div>

                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                <div className="mt-4 d-flex flex-wrap gap-3 align-items-center">
                  <a
                    href={whatsappLink(bookMessage)}
                    className="btn btn-main btn-round-full"
                    aria-label={`Book ${service.name} on WhatsApp`}
                    onClick={() => track("whatsapp_click", { treatment: service.slug })}
                    {...externalLink}
                  >
                    Book on WhatsApp
                  </a>
                  <a
                    href={site.phone.tel}
                    className="btn btn-solid-border btn-round-full"
                    style={{ fontSize: "0.8rem" }}
                    onClick={() => track("call_click", { treatment: service.slug })}
                  >
                    Call Us
                  </a>
                </div>

                <p className="mt-3 mb-0" style={{ fontSize: "14px", color: "var(--text-muted)" }}>
                  Message us and our reply comes straight back with the full price list.
                </p>

                <p className="mt-4 mb-0" style={{ fontSize: "15px" }}>
                  <Link to="/services">← See all seven treatments</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
