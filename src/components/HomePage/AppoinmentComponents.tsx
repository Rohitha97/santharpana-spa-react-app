import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppoinmentComponents({ }) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_wfya6jy", "template_qwwrktr", form.current, "4Dndd4knu6wytsWdR")
        .then(
          () => {
            toast.success("Your booking has been sent successfully!");
            form.current?.reset();
          },
          () => toast.error("Something went wrong. Please try again.")
        );
    }
  };

  return (
    <>
      <section className="section appoinment">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Image side */}
            <div className="col-lg-5">
              <div className="appoinment-content">
                <img src="images/about/img-3.webp" alt="Santharpana treatment" className="img-fluid" />
                <div className="emergency">
                  <h2>
                    <i className="icofont-phone-circle"></i>
                    +94 762 436 139
                  </h2>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="col-lg-6 col-md-10">
              <div className="appoinment-wrap">
                <span className="subtitle d-block mb-3">Easy Booking</span>
                <h2 className="mb-3">Book Appointment<br />via WhatsApp</h2>
                <p className="mb-4" style={{ fontSize: "15.5px", color: "var(--text-muted)" }}>
                  Provide the service name and your preferred date — we'll get back to you as soon as possible to confirm your session.
                </p>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <a
                    className="btn btn-main btn-round-full"
                    aria-label="Chat on WhatsApp"
                    href="https://wa.me/+94762436139"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    className="btn btn-solid-border btn-round-full"
                    href="tel:+94762436139"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Call Us
                  </a>
                </div>
                <ToastContainer position="bottom-right" theme="light" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppoinmentComponents;
