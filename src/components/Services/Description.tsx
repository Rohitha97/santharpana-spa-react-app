import { Link, useSearchParams } from "react-router-dom";
import PageHeader from "../Layouts/PageHeader";
import { servicesCard } from "../../DataModel/ServicesModel";
import { externalLink, site } from "../../config/site";
import { img } from "../../utils/image";

function Description() {
  const [searchParams] = useSearchParams();

  // Treatments are looked up by id so the URL stays short. Older links carried
  // the whole description in the query string, so fall back to those params.
  const id = searchParams.get("id");
  const service = id ? servicesCard.find((s) => String(s.id) === id) : undefined;

  const name = service?.name ?? searchParams.get("name");
  const description = service?.description ?? searchParams.get("description");
  const imgSrc = service?.imgSrc ?? searchParams.get("imgSrc");
  const price = service?.price ?? searchParams.get("price");

  const paragraphs = description?.split("\n").filter((line) => line.trim().length > 0);

  if (!name) {
    return (
      <>
        <PageHeader title="Treatment Not Found" subtitle="Our Services" />
        <section className="section">
          <div className="container text-center">
            <p className="mb-4" style={{ color: "var(--text-muted)" }}>
              We couldn't find that treatment. Browse our full list instead.
            </p>
            <Link to="/services" className="btn btn-main btn-round-full">
              View All Treatments
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title={name} subtitle="Our Services" />
      <section className="section about">
        <div className="container">
          <div className="row align-items-start g-5">
            {/* Image */}
            <div className="col-lg-5 col-sm-10">
              {imgSrc && (
                <img
                  src={img(imgSrc)}
                  alt={name}
                  className="img-fluid"
                  width={800}
                  height={1000}
                  decoding="async"
                  style={{
                    borderRadius: "var(--r-lg)",
                    boxShadow: "var(--sh-lg)",
                    width: "100%",
                    objectFit: "cover",
                    maxHeight: "500px",
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div className="col-lg-7">
              <div className="about-content ps-lg-2">
                <span className="subtitle d-block mb-3">Treatment Details</span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
                    color: "var(--plum)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {name}
                </h2>

                {paragraphs?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                {price && price !== "-" && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "var(--plum-mist)",
                      border: "1px solid var(--border)",
                      borderLeft: "3px solid var(--terra)",
                      borderRadius: "var(--r-sm)",
                      padding: "12px 20px",
                      marginTop: "8px",
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
                      Price
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.4rem",
                        color: "var(--plum)",
                        fontWeight: 600,
                      }}
                    >
                      {price}
                    </span>
                  </div>
                )}

                <div className="mt-4">
                  <a
                    href={`${site.phone.whatsapp}?text=${encodeURIComponent(
                      `Hello Santharpana, I'd like to book the "${name}" treatment.`
                    )}`}
                    className="btn btn-main btn-round-full"
                    aria-label="Book this treatment via WhatsApp"
                    {...externalLink}
                  >
                    Book This Treatment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
