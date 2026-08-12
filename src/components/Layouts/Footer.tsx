import { Link } from "react-router-dom";
import ScrollTriggerButton from "./ScrollButton";
import SocialLinks from "./SocialLinks";
import { externalLink, site } from "../../config/site";
import { img } from "../../utils/image";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer section">
        <div className="container">
          <div className="row">
            {/* Logo + tagline */}
            <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
              <div className="widget">
                <div className="logo mb-4">
                  <img
                    src={img("logo.png")}
                    alt={site.name}
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    style={{ width: "80px", height: "auto" }}
                  />
                </div>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: "1.7", maxWidth: "260px" }}>
                  A government-registered Ayurvedic spa nestled in the lush greenery of Sigiriya, Sri Lanka. Your sanctuary for authentic healing.
                </p>
                <address
                  className="mt-3 mb-0"
                  style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", fontStyle: "normal", lineHeight: "1.7" }}
                >
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.country}
                </address>
              </div>
            </div>

            {/* Google Map */}
            <div className="col-lg-4 col-md-8 col-sm-6 mb-5 mb-lg-0">
              <div className="widget widget-contact">
                <h4>Our Location</h4>
                <div className="divider mb-4"></div>
                <div className="widget-contact">
                  <iframe
                    src={site.maps.embed}
                    title={`Map showing ${site.name} at ${site.address.full}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Contact + Socials */}
            <div className="col-lg-4 col-md-8 col-sm-6">
              <div className="widget widget-contact">
                <h4>Get in Touch</h4>
                <div className="divider mb-4"></div>

                <div className="footer-contact-block mb-4">
                  <span className="h6 d-block">Support Available 24 / 7</span>
                  <h4>
                    <a href={site.mailto}>{site.email}</a>
                  </h4>
                </div>

                <div className="footer-contact-block mb-4">
                  <span className="h6 d-block">
                    {site.hours.days} · {site.hours.time}
                  </span>
                  <h4>
                    <a href={site.phone.whatsapp} {...externalLink}>
                      {site.phone.display}
                    </a>
                  </h4>
                </div>

                <div className="footer-contact-block">
                  <SocialLinks variant="dark" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-btm pt-4 mt-4">
            <div className="text-center copyright">
              &copy; {currentYear}{" "}
              <Link to="/">{site.name}</Link>
              {" · "}Developed by{" "}
              <a href="https://rohitha.vercel.app/" {...externalLink}>
                Rohitha Rathnayake
              </a>
            </div>
          </div>
        </div>
      </footer>
      <ScrollTriggerButton />
    </>
  );
}

export default Footer;
