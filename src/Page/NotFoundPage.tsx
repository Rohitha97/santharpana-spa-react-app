import { Link } from "react-router-dom";
import Footer from "../components/Layouts/Footer";
import NavBar from "../components/Layouts/NavBar";
import PageHeader from "../components/Layouts/PageHeader";
import { externalLink, site } from "../config/site";

function NotFoundPage() {
  return (
    <>
      <NavBar />
      <PageHeader title="Page Not Found" subtitle="Error 404" />
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <h2 className="mb-3" style={{ color: "var(--plum)" }}>
                This page has wandered off
              </h2>
              <p className="mb-4" style={{ color: "var(--text-muted)" }}>
                The page you were looking for doesn't exist or has moved. Let us guide you back.
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <Link to="/" className="btn btn-main btn-round-full">
                  Back to Home
                </Link>
                <a
                  href={site.phone.whatsapp}
                  className="btn btn-solid-border btn-round-full"
                  aria-label="Chat on WhatsApp"
                  {...externalLink}
                >
                  Talk to Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NotFoundPage;
