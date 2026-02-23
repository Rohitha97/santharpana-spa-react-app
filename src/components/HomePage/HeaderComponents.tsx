import { Link } from "react-router-dom";
import { AiOutlineBook, AiOutlineClockCircle } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { FaFacebookF, FaGoogle, FaInstagram, FaTripadvisor, FaWhatsapp } from "react-icons/fa";

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
                    href="https://wa.me/+94762436139"
                  >
                    Book an Appointment
                  </a>
                  <Link
                    to="/services"
                    className="btn btn-solid-border btn-round-full"
                    onClick={() => window.scrollTo(0, 0)}
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
                    href="https://wa.me/+94762436139"
                    className="btn btn-main btn-round-full"
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
                      <span>Monday – Sunday</span>
                      <span style={{ color: "var(--plum)", fontWeight: 600 }}>9:00&nbsp;–&nbsp;21:00</span>
                    </li>
                  </ul>
                </div>

                {/* Card 3 — Contact */}
                <div className="feature-item mb-4 mb-lg-0">
                  <div className="feature-icon">
                    <MdSupportAgent color="var(--plum)" size={26} />
                  </div>
                  <span>Contact Us</span>
                  <h4>+94 76 243 6139</h4>
                  <ul className="footer-socials list-unstyled d-flex flex-wrap gap-2 mt-3">
                    {[
                      { href: "https://wa.me/+94762436139", icon: <FaWhatsapp />, label: "WhatsApp" },
                      { href: "https://www.facebook.com/Santharpana-Ayurvedic-Garden-Spa-100482329280363/", icon: <FaFacebookF />, label: "Facebook" },
                      { href: "https://www.instagram.com/santharpanaspa/", icon: <FaInstagram />, label: "Instagram" },
                      { href: "https://goo.gl/maps/d8M9YnxJLPCveBNQ9", icon: <FaGoogle />, label: "Google" },
                      { href: "https://www.tripadvisor.com/Attraction_Review-g304141-d23948259-Reviews-Santharpana_Ayurvedic_Garden-Sigiriya_Central_Province.html", icon: <FaTripadvisor />, label: "Tripadvisor" },
                    ].map(({ href, icon, label }) => (
                      <li key={label}>
                        <Link to={href} aria-label={label}
                          style={{
                            display: "flex", alignItems: "center", justifyContent: "center",
                            width: 34, height: 34, borderRadius: "50%",
                            background: "var(--plum-mist)", border: "1px solid var(--border)",
                            color: "var(--plum)", fontSize: 13,
                            transition: "background var(--t-fast), color var(--t-fast), transform var(--t-spring)"
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = "var(--plum)";
                            (e.currentTarget as HTMLElement).style.color = "#fff";
                            (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = "var(--plum-mist)";
                            (e.currentTarget as HTMLElement).style.color = "var(--plum)";
                            (e.currentTarget as HTMLElement).style.transform = "none";
                          }}
                        >
                          {icon}
                        </Link>
                      </li>
                    ))}
                  </ul>
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
                  <img src="images/about/img-1.jpg" alt="Santharpana treatment" className="img-fluid mt-2" />
                  <img src="images/about/img-2.jpg" alt="Santharpana garden" className="img-fluid mt-2" />
                </div>
                <div className="about-img col-4 p-2">
                  <img src="images/about/img-3.jpg" alt="Santharpana therapy" className="img-fluid" style={{ height: "100%", objectFit: "cover" }} />
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
                      onClick={() => window.scrollTo(0, 0)}
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
                <Link to="/services" className="btn btn-main btn-round-full" onClick={() => window.scrollTo(0, 0)}>
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
