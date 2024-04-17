import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { servicesCard } from "../../DataModel/ServicesModel";

function AppoinmentComponents({}) {
  // const form = useRef();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm("service_wfya6jy", "template_qwwrktr", form.current, "4Dndd4knu6wytsWdR").then(
        (result) => {
          console.log(result.text);
          toast.success("Your booking has been sent successfully");
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
      <section className="section appoinment">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <div className="appoinment-content">
                <img src="images/about/img-3.jpg" alt="" className="img-fluid" />
                <div className="emergency">
                  <h2 className="text-lg">
                    <i className="icofont-phone-circle text-lg"></i>+94 762436139
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 ">
              <div className="appoinment-wrap mt-5 mt-lg-0">
                <h2 className="mb-2 title-color">Book Appointment via WhatsApp</h2>
                <p className="mb-4">Please provide the service name and date to book an appointment. We will get back to you as soon as possible.</p>
                <div className="mb-4">
                  <a className="btn btn-main btn-round-full rounded-5" aria-label="Chat on WhatsApp" href="https://wa.me/+94762436139">
                    Chat on WhatsApp
                  </a>
                </div>

                {/* <ToastContainer />
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-lg-6 my-2">
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="Service"
                          aria-label="Select Service"
                        >
                          <option selected>Select Service</option>
                          {servicesCard.map((services, index) => (
                            <option value={services.name}>
                              {services.name}
                            </option>
                          ))}
                        </select>
                        {/* <input
                          name="Service"
                          type="text"
                          className="form-control"
                          placeholder="Service"
                        /> 
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div className="form-group">
                        <input
                          name="Date"
                          type="date"
                          className="form-control"
                          placeholder="dd/mm/yyyy"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 my-2">
                      <div className="form-group">
                        <input
                          name="Time"
                          type="time"
                          className="form-control"
                          placeholder="Time"
                          required
                        />
                      </div>
                    </div>
                    {/* <div className="col-lg-6 my-2">
                      <div className="form-group">
                        <input
                          name="Name"
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div> 
                  </div>
                  <button
                    className="btn btn-main btn-round-full rounded-5"
                    type="submit"
                    // onClick={handleClick}
                  >
                    Make Appointment
                    <i className="icofont-simple-right ml-2"></i>
                  </button>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppoinmentComponents;
