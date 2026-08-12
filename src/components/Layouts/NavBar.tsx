import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../index.css";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { externalLink, site } from "../../config/site";
import { img } from "../../utils/image";

function NavBar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      // Coalesce scroll events into one state update per frame
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavLinks = () => setShowNavLinks((s) => !s);
  const closeNavLinks = () => setShowNavLinks(false);

  return (
    <>
      <header>
        {/* Top info bar — desktop only */}
        <div className="header-top-bar d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <ul className="top-bar-info list-inline mb-0 d-flex align-items-center gap-4">
                  <li className="list-inline-item">
                    <a href={site.mailto} className="d-flex align-items-center gap-2">
                      <MdEmail size={15} style={{ opacity: 0.7 }} aria-hidden="true" />
                      {site.email}
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      aria-label={`Our location: ${site.address.full}`}
                      href={site.maps.link}
                      className="d-flex align-items-center gap-2"
                      {...externalLink}
                    >
                      <MdLocationOn size={14} style={{ opacity: 0.7 }} aria-hidden="true" />
                      {site.address.short}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 text-end">
                <a
                  aria-label="Chat on WhatsApp"
                  href={site.phone.whatsapp}
                  {...externalLink}
                  style={{ color: "rgba(232,197,170,0.9)", fontWeight: 500, letterSpacing: "0.04em", fontSize: "13px" }}
                >
                  WhatsApp&nbsp;
                  <span style={{ color: "#d4a88a", fontWeight: 600 }}>{site.phone.display}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav
          className={`navbar navbar-expand-lg${scrolled ? " scrolled" : ""}`}
          id="navbar"
          style={{ position: "sticky", top: 0, zIndex: 1000 }}
        >
          <div className="container d-flex align-items-center justify-content-between">
            {/* Logo */}
            <Link className="navbar-brand" to="/" onClick={closeNavLinks}>
              <img
                src={img("logo.png")}
                alt={site.name}
                className="logo-img"
                width={80}
                height={80}
                fetchPriority="high"
                decoding="async"
              />
            </Link>

            {/* Hamburger — mobile */}
            <button
              className="d-lg-none"
              onClick={toggleNavLinks}
              aria-label={showNavLinks ? "Close navigation" : "Open navigation"}
              aria-expanded={showNavLinks}
              aria-controls="navbarmain"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "22px",
                    height: "1.5px",
                    background: "var(--plum)",
                    borderRadius: "2px",
                    transition: "var(--t-base)",
                    transformOrigin: "center",
                    transform:
                      showNavLinks
                        ? i === 0
                          ? "rotate(45deg) translate(4px, 5px)"
                          : i === 1
                            ? "scaleX(0)"
                            : "rotate(-45deg) translate(4px, -5px)"
                        : "none",
                    opacity: showNavLinks && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>

            {/* Nav links */}
            <div
              className={`collapse navbar-collapse flex-row-reverse${showNavLinks ? " show" : ""}`}
              id="navbarmain"
            >
              <ul className="navbar-nav d-flex align-items-lg-center gap-lg-1">
                {[
                  { to: "/", label: "Home", end: true },
                  { to: "/services", label: "Services" },
                  { to: "/appoinment", label: "Appointment" },
                  { to: "/about", label: "About" },
                  { to: "/contact", label: "Contact" },
                ].map(({ to, label, end }) => (
                  <li className="nav-item" key={to}>
                    <NavLink className="nav-link" to={to} end={end} onClick={closeNavLinks}>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
