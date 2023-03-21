import React from "react";

function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <>
      <footer className="footer section gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mr-auto col-sm-6">
              <div className="widget mb-5 mb-lg-0">
                <div className="logo mb-4">
                  <img src="images/logo.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-6 mt-4 pl-lg-5 pl-sm-5">
              <div className="widget widget-contact mb-5 mb-lg-0">
                <h4 className="mb-3">Working Hours</h4>
                <div className="divider mb-4"></div>
                <ul className="w-hours list-unstyled">
                  <li className="d-flex justify-content-between">
                    Monday<span>9:00 - 21:00</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    Tuesday<span>9:00 - 21:00</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    Wednesday<span>9:00 - 21:00</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    Thursday<span>9:00 - 21:00</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    Friday<span>9:00 - 21:00</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    Saturday<span>9:00 - 21:00</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    Sunday <span>9:00 - 21:00</span>
                  </li>
                </ul>
              </div>
            </div>

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
                    <a href="mailto:santharpanaspa@gmail.com">
                      santharpanaspa@gmail.com
                    </a>
                  </h4>
                </div>

                <div className="footer-contact-block">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-support mr-3"></i>
                    <span className="h6 mb-0">
                      Mon to Sunday : 09:00 - 21:00
                    </span>
                  </div>
                  <h4 className="mt-2">
                    <a href="tel:+94706626139">+94 70 662 6139</a>
                  </h4>
                </div>
                <div className="footer-contact-block">
                  <ul className="list-inline footer-socials mt-4">
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/Santharpana-Ayurvedic-Garden-Spa-100482329280363/">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/santharpanaspa/">
                        <i className="icofont-instagram"></i>
                      </a>
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
                  <a href="https://www.santharpanaspa.com">
                    Santharpana Ayurvedic Garden
                  </a>{" "}
                  | Developed by Rohitha Rathnayake
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <a className="backtop js-scroll-trigger" href="#top">
                  <i className="icofont-long-arrow-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
