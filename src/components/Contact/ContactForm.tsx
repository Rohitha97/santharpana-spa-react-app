import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_wfya6jy", "template_nntewfh", form.current, "4Dndd4knu6wytsWdR")
        .then(
          () => {
            toast.success("Message sent! We'll get back to you shortly.");
            form.current?.reset();
          },
          () => toast.error("Something went wrong. Please try again.")
        );
    }
  };

  return (
    <>
      <section className="section contact-form-wrap">
        <div className="container">
          {/* Header */}
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <span className="subtitle d-block mb-3">Let's Connect</span>
                <h2>Send Us a Message</h2>
                <div className="divider mx-auto mt-3"></div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11">
              <ToastContainer position="bottom-right" theme="light" />
              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="subject"
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Query Topic"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="phone"
                        id="phone"
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        placeholder="Your message…"
                        style={{ minHeight: "200px" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_captcha" value="false" />
                  <button className="btn btn-main btn-round-full" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
