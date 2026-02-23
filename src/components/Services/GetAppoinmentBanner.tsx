import { Link } from "react-router-dom";

function GetAppoinmentBanner() {
  return (
    <>
      <section className="section cta-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta-content">
                <div className="divider mb-4"></div>
                <h2 className="mb-5 ah2">
                  We are pleased to offer you the chance to experience holistic&nbsp;wellness
                </h2>
                <div className="d-flex flex-wrap gap-3">
                  <Link
                    to="/appoinment"
                    className="btn btn-main-2 btn-round-full"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Get an Appointment
                  </Link>
                  <a
                    href="https://wa.me/+94762436139"
                    className="btn btn-white btn-round-full"
                    aria-label="Chat on WhatsApp"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetAppoinmentBanner;
