import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_wfya6jy",
          "template_nntewfh",
          form.current,
          "4Dndd4knu6wytsWdR"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success(
              "Your Message has been sent successfully, We will get back to you!"
            );
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            toast.error("Something went wrong");
          }
        );
    }
  };

  return (
    <>
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="text-md mb-2">Contact us</h2>
                <div className="divider mx-auto my-4"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ToastContainer />
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
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
                  <div className="col-lg-6">
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
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="phone"
                        id="phone"
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group-2 mb-4">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    placeholder="Message"
                    style={{ height: "240px" }}
                  ></textarea>
                </div>

                <div className="text-center">
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_captcha" value="false" />
                  <button className="btn btn-main btn-round-full" type="submit">
                    Send Messege
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
