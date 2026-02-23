import PageHeader from "../Layouts/PageHeader";
import { useLocation } from "react-router-dom";

function Description() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const description = searchParams.get("description");
  const imgSrc = searchParams.get("imgSrc");
  const price = searchParams.get("price");
  const paragraphs = description?.split("\n").filter(Boolean);

  return (
    <>
      <PageHeader title={name} subtitle="Our Services" />
      <section className="section about">
        <div className="container">
          <div className="row align-items-start g-5">
            {/* Image */}
            <div className="col-lg-5 col-sm-10">
              <img
                src={imgSrc ?? undefined}
                alt={name ?? "Treatment"}
                className="img-fluid"
                style={{
                  borderRadius: "var(--r-lg)",
                  boxShadow: "var(--sh-lg)",
                  width: "100%",
                  objectFit: "cover",
                  maxHeight: "500px",
                }}
              />
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
                    href="https://wa.me/+94762436139"
                    className="btn btn-main btn-round-full"
                    aria-label="Book via WhatsApp"
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
