import { Link } from "react-router-dom";
import { AiOutlineBook, AiOutlineClockCircle } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import SocialLinks from "../Layouts/SocialLinks";
import { externalLink, site } from "../../config/site";
import { img } from "../../utils/image";

function Header() {
  return (
    <>
      {/* ─── Hero / Banner ─── */}
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-10">
              <div className="block">
                <p className="subtitle-tag">
                  Authentic Ayurvedic Healing
                </p>
                <h1>Your&nbsp;Most&nbsp;Trusted<br />Ayurvedic&nbsp;Spa</h1>
                <p className="banner-p mb-4">
                  The Authentic Ayurvedic Massage specialises in holistic body healing and mental relaxation, deep in the greenery of Sigiriya.
                </p>
                <div className="btn-container">
                  <a
                    className="btn btn-main-2 btn-round-full"
                    aria-label="Chat on WhatsApp"
                    href={site.phone.whatsapp}
                    {...externalLink}
                  >
                    Book an Appointment
                  </a>
                  <Link
                    to="/services"
                    className="btn btn-solid-border btn-round-full"
                    style={{ color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.45)" }}
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Feature Strip ─── */}
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-block d-lg-flex">

                {/* Card 1 — Appointment */}
                <div className="feature-item mb-4 mb-lg-0">
                  <div className="feature-icon">
                    <AiOutlineBook color="var(--plum)" size={26} />
                  </div>
                  <span>24-Hour Service</span>
                  <h4>Book Online</h4>
                  <p className="mb-4">
                    Sometimes the best thing to do is just call it a day and go get a massage.
                  </p>
                  <a
                    aria-label="Chat on WhatsApp"
                    href={site.phone.whatsapp}
                    className="btn btn-main btn-round-full"
                    {...externalLink}
                  >
                    Make an Appointment
                  </a>
                </div>

                {/* Card 2 — Hours */}
                <div className="feature-item mb-4 mb-lg-0">
                  <div className="feature-icon">
                    <AiOutlineClockCircle color="var(--plum)" size={26} />
                  </div>
                  <span>Timing Schedule</span>
                  <h4>Working Hours</h4>
                  <ul className="w-hours list-unstyled mt-2">
                    <li className="d-flex justify-content-between">
                      <span>{site.hours.days}</span>
                      <span style={{ color: "var(--plum)", fontWeight: 600 }}>{site.hours.time}</span>
                    </li>
                  </ul>
                </div>

                {/* Card 3 — Contact */}
                <div className="feature-item mb-4 mb-lg-0">
                  <div className="feature-icon">
                    <MdSupportAgent color="var(--plum)" size={26} />
                  </div>
                  <span>Contact Us</span>
                  <h4>
                    <a href={site.phone.tel} style={{ color: "inherit" }}>
                      {site.phone.display}
                    </a>
                  </h4>
                  <SocialLinks variant="light" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── About Preview ─── */}
      <section className="section about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="about-images d-flex flex-wrap">
                <div className="about-img col-4 p-2">
                  <img
                    src={img("about/img-1.jpg")}
                    alt="Ayurvedic treatment room at Santharpana"
                    className="img-fluid mt-2"
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={img("about/img-2.jpg")}
                    alt="The herbal garden at Santharpana"
                    className="img-fluid mt-2"
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="about-img col-4 p-2">
                  <img
                    src={img("about/img-3.jpg")}
                    alt="Ayurvedic therapy session in progress"
                    className="img-fluid"
                    width={600}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="col-lg-4 d-none d-lg-flex flex-column justify-content-center align-items-start ps-4">
                  <div className="about-content" style={{ textAlign: "left" }}>
                    <span className="subtitle d-block mb-3">About Us</span>
                    <h2>Personal Care &amp; Healthy Living</h2>
                    <p className="mt-3 mb-4" style={{ fontSize: "15px", color: "var(--text-muted)" }}>
                      Rest and your energy will be restored. We provide the best leading Ayurvedic Spa services rooted in authentic Sri Lankan tradition.
                    </p>
                    <Link
                      to="/services"
                      className="btn btn-main btn-round-full"
                    >
                      Our Services
                    </Link>
                  </div>
                </div>
              </div>
              {/* Mobile about text */}
              <div className="d-lg-none mt-4 text-center">
                <span className="subtitle d-block mb-2">About Us</span>
                <h2 style={{ fontSize: "1.6rem" }}>Personal Care &amp; Healthy Living</h2>
                <p className="mt-2 mb-4" style={{ fontSize: "15px" }}>Rest and your energy will be restored. We provide the best leading Ayurvedic Spa services.</p>
                <Link to="/services" className="btn btn-main btn-round-full">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
