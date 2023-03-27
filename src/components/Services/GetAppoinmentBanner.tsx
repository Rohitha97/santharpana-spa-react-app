import React from "react";
import { Link } from "react-router-dom";

function GetAppoinmentBanner() {
  return (
    <>
      <section className="section cta-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="cta-content">
                <div className="divider mb-4"></div>
                <h2 className="mb-5 text-lg ah2">
                  We are pleased to offer you the chance to have the healthy
                </h2>
                <Link
                  to="/appoinment"
                  className="btn btn-main-2 btn-round-full"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Get appoinment<i className="icofont-simple-right  ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetAppoinmentBanner;
