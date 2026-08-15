import { MdPhoneInTalk } from "react-icons/md";
import { externalLink, site, whatsappLink } from "../../config/site";
import { img } from "../../utils/image";
import { track } from "../../utils/analytics";

function AppoinmentComponents() {
  return (
    <section className="section appoinment">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Image side */}
          <div className="col-lg-5">
            <div className="appoinment-content">
              <img
                src={img("about/img-3.webp")}
                alt="Ayurvedic treatment at Santharpana"
                className="img-fluid"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
              <div className="emergency">
                <h2>
                  <MdPhoneInTalk aria-hidden="true" />
                  <a href={site.phone.tel}>{site.phone.display}</a>
                </h2>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="col-lg-6 col-md-10">
            <div className="appoinment-wrap">
              <span className="subtitle d-block mb-3">Easy Booking</span>
              <h2 className="mb-3">
                Book Appointment
                <br />
                via WhatsApp
              </h2>
              <p className="mb-4" style={{ fontSize: "15.5px", color: "var(--text-muted)" }}>
                Tap below and your message is already written — just add the treatment and the day
                that suits you. Our reply comes straight back with the full price list.
              </p>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <a
                  className="btn btn-main btn-round-full"
                  aria-label="Chat on WhatsApp"
                  href={whatsappLink(
                    "Hello Santharpana, I'd like to book a treatment.\n\nTreatment: \nPreferred day: \nPreferred time: \nNumber of guests: \n\nCould you confirm availability and send me the price list?"
                  )}
                  onClick={() => track("whatsapp_click", { source: "appointment_section" })}
                  {...externalLink}
                >
                  Chat on WhatsApp
                </a>
                <a
                  className="btn btn-solid-border btn-round-full"
                  href={site.phone.tel}
                  style={{ fontSize: "0.8rem" }}
                  onClick={() => track("call_click", { source: "appointment_section" })}
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppoinmentComponents;
