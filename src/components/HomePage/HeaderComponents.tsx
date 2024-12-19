import React from "react";
import { Link } from "react-router-dom";
import PricingComponents from "./PricingComponents";
import { AiOutlineBook, AiOutlineClockCircle } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { FaFacebookF, FaGoogle, FaInstagram, FaTripadvisor, FaWhatsapp } from "react-icons/fa";

function Header() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                <span className="text-uppercase text-sm letter-spacing">Keep calm and make a self-care plan</span>
                <h1 className="mb-3 mt-3">Your most trusted Ayurvedic Spa</h1>
                <p className="mb-4 pr-5 banner-p">It’s not selfish to love yourself, take care of yourself, and to make your happiness a priority. It’s necessary.</p>
                <div className="btn-container">
                  <a className="btn btn-main-2 btn-icon btn-round-full rounded-5" aria-label="Chat on WhatsApp" href="https://wa.me/+94762436139">
                    Make an appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-block d-lg-flex">
                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <AiOutlineBook color="#4b1e3d" size={"40px"} />
                  </div>
                  <span>24 Hours Service</span>
                  <h4 className="mb-3">Online Appointment</h4>
                  <p className="mb-4">Sometimes the best thing to do is just call it a day and go get a massage.</p>
                  <a aria-label="Chat on WhatsApp" href="https://wa.me/+94762436139" className="btn btn-main btn-round-full rounded-5">
                    Make a appointment
                  </a>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <AiOutlineClockCircle color="#4b1e3d" size={"40px"} />
                  </div>
                  <span>Timing schedule</span>
                  <h4 className="mb-3">Working Hours</h4>
                  <ul className="w-hours list-unstyled">
                    <li className="d-flex justify-content-between">
                      Monday - Sunday <span>9:00 - 21:00</span>
                    </li>
                  </ul>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <MdSupportAgent color="#4b1e3d" size={"40px"} />
                  </div>
                  <span>Contact</span>
                  <h4 className="mb-3">+94 76 243 6139</h4>
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
        </div>
      </section>
      <section className="section about">
        <div className="container">
          <div className="row align-items-center">
            <div className="about-images d-flex flex-wrap">
              <div className="about-img col-4 p-2">
                <img src="images/about/img-1.jpg" alt="" className="img-fluid mt-2" />
                <img src="images/about/img-2.jpg" alt="" className="img-fluid mt-2" />
              </div>
              <div className="about-img col-4 p-2">
                <img src="images/about/img-3.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <div className="about-content mt-4">
                  <h2 className="title-color">
                    Personal care <br />& healthy living
                  </h2>
                  <p className="mt-4 mb-5">Rest and your energy will be restored. We provide best leading Spa services.</p>
                  <Link to="/services" className="btn btn-main-2 btn-round-full btn-icon rounded-5" onClick={() => window.scrollTo(0, 0)}>
                    Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
