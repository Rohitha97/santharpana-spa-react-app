import React from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaTripadvisor, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollTriggerButton from "./ScrollButton";

function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <>
      <footer className="footer section gray-bg">
        <div className="container">
          <div className="row">
            {/* Logo Column */}
            <div className="col-lg-4 mr-auto col-sm-6">
              <div className="widget mb-5 mb-lg-0">
                <div className="logo mb-4">
                  <img src="images/logo.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            {/* Google Map Column (replaces Working Hours) */}
            <div className="col-lg-4 col-md-8 col-sm-6 mt-4 pl-lg-5 pl-sm-5">
              <div className="widget widget-contact mb-5 mb-lg-0">
                <h4 className="mb-3">Our Location</h4>
                <div className="divider mb-4"></div>
                <div style={{ width: "100%", height: "auto", overflow: "hidden" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.738853107973!2d80.68895937500635!3d7.922322592101289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca5579088964d%3A0x93dec67d5bb03db1!2sSantharpana%20Ayurveda%20Ashram%2C%20Ayurvedic%20massage.!5e0!3m2!1sen!2sjp!4v1734852297473!5m2!1sen!2sjp"
                    width="100%"
                    height="290"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact & Socials Column */}
            <div className="col-lg-4 col-md-8 col-sm-6 mt-4 pl-lg-5 pl-sm-5">
              <div className="widget widget-contact mb-5 mb-lg-0">
                <h4 className="text-capitalize mb-3">Get in Touch</h4>
                <div className="divider mb-4"></div>

                <div className="footer-contact-block mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-email mr-3"></i>
                    <span className="h6 mb-0">Support Available for 24/7</span>
                  </div>
                  <h4 className="mt-2">
                    <Link to="mailto:gaminianilkumara@gmail.com">gaminianilkumara@gmail.com</Link>
                  </h4>
                </div>

                <div className="footer-contact-block">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-support mr-3"></i>
                    <span className="h6 mb-0">Mon to Sunday : 09:00 - 21:00</span>
                  </div>
                  <h4 className="mt-2">
                    <Link to="https://wa.me/+94762436139">+94 76 243 6139</Link>
                  </h4>
                </div>
                <div className="footer-contact-block">
                  <ul className="list-inline footer-socials mt-4">
                    <li className="list-inline-item">
                      <Link to="https://wa.me/+94762436139">
                        <FaWhatsapp color="white" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="https://www.facebook.com/Santharpana-Ayurvedic-Garden-Spa-100482329280363/">
                        <FaFacebookF color="white" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="https://www.instagram.com/santharpanaspa/">
                        <FaInstagram color="white" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="https://goo.gl/maps/d8M9YnxJLPCveBNQ9">
                        <FaGoogle color="white" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="https://www.tripadvisor.com/Attraction_Review-g304141-d23948259-Reviews-Santharpana_Ayurvedic_Garden-Sigiriya_Central_Province.html">
                        <FaTripadvisor color="white" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-btm py-4 mt-3">
            <div className="text-center">
              <div className="copyright">
                &copy; Copyright {currentDate}{" "}
                <span className="text-color">
                  <Link to="https://www.santharpanaspa.com">Santharpana Ayurveda Ashram</Link>
                  {" | "}Developed by <Link to="https://rohitha-grvok0t2d-rohitha97s-projects.vercel.app/">Rohitha Rathnayake</Link>
                </span>
              </div>
            </div>
            <ScrollTriggerButton />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
