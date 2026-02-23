import { FaFacebookF, FaGoogle, FaInstagram, FaTripadvisor, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollTriggerButton from "./ScrollButton";

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
                  <img src="images/logo.png" alt="Santharpana Ayurveda Ashram" style={{ width: "80px" }} />
                </div>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: "1.7", maxWidth: "260px" }}>
                  A government-registered Ayurvedic spa nestled in the lush greenery of Sigiriya, Sri Lanka. Your sanctuary for authentic healing.
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="col-lg-4 col-md-8 col-sm-6 mb-5 mb-lg-0">
              <div className="widget widget-contact">
                <h4>Our Location</h4>
                <div className="divider mb-4"></div>
                <div className="widget-contact">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.738853107973!2d80.68895937500635!3d7.922322592101289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca5579088964d%3A0x93dec67d5bb03db1!2sSantharpana%20Ayurveda%20Ashram%2C%20Ayurvedic%20massage.!5e0!3m2!1sen!2sjp!4v1734852297473!5m2!1sen!2sjp"
                    title="Santharpana location"
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
                    <Link to="mailto:gaminianilkumara@gmail.com">
                      gaminianilkumara@gmail.com
                    </Link>
                  </h4>
                </div>

                <div className="footer-contact-block mb-4">
                  <span className="h6 d-block">Mon – Sunday · 09:00 – 21:00</span>
                  <h4>
                    <Link to="https://wa.me/+94762436139">+94 76 243 6139</Link>
                  </h4>
                </div>

                <div className="footer-contact-block">
                  <ul className="footer-socials list-unstyled d-flex flex-wrap gap-2 mt-3">
                    {[
                      { href: "https://wa.me/+94762436139", icon: <FaWhatsapp />, label: "WhatsApp" },
                      { href: "https://www.facebook.com/Santharpana-Ayurvedic-Garden-Spa-100482329280363/", icon: <FaFacebookF />, label: "Facebook" },
                      { href: "https://www.instagram.com/santharpanaspa/", icon: <FaInstagram />, label: "Instagram" },
                      { href: "https://goo.gl/maps/d8M9YnxJLPCveBNQ9", icon: <FaGoogle />, label: "Google" },
                      { href: "https://www.tripadvisor.com/Attraction_Review-g304141-d23948259-Reviews-Santharpana_Ayurvedic_Garden-Sigiriya_Central_Province.html", icon: <FaTripadvisor />, label: "Tripadvisor" },
                    ].map(({ href, icon, label }) => (
                      <li key={label}>
                        <Link to={href} aria-label={label}>{icon}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-btm pt-4 mt-4">
            <div className="text-center copyright">
              &copy; {currentYear}{" "}
              <Link to="https://www.santharpanaspa.com">Santharpana Ayurveda Ashram</Link>
              {" · "}Developed by{" "}
              <Link to="https://rohitha.vercel.app/">Rohitha Rathnayake</Link>
            </div>
          </div>
        </div>
      </footer>
      <ScrollTriggerButton />
    </>
  );
}

export default Footer;
