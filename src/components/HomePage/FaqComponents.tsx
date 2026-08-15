import { faqs } from "../../config/seo";
import { externalLink, whatsappLink } from "../../config/site";
import { track } from "../../utils/analytics";
import "./FaqComponents.css";

/**
 * The questions that stop a booking: therapist gender, what to wear, whether we
 * are registered, and what it costs. None of these were answered anywhere on the
 * site, so a guest with any of them had to message and wait.
 *
 * The same list feeds the FAQPage structured data in src/config/seo.ts, which is
 * what lets these answers appear directly in Google's results — so edit the
 * questions there, not here.
 *
 * Built on <details>/<summary> rather than a JS accordion: it opens without
 * JavaScript, it is keyboard accessible for free, and the browser's own find-in-page
 * can reach the closed answers.
 */
function FaqComponents() {
  return (
    <section className="section faq-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <span className="subtitle d-block mb-3">Before You Book</span>
            <h2>Questions Guests Ask</h2>
            <div className="divider mx-auto mt-3 mb-5"></div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>
                    <span>{item.q}</span>
                    <span className="faq-marker" aria-hidden="true"></span>
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>

            <p className="faq-footer">
              Still unsure?{" "}
              <a
                href={whatsappLink(
                  "Hello Santharpana, I have a question before booking a treatment."
                )}
                onClick={() => track("whatsapp_click", { source: "faq" })}
                {...externalLink}
              >
                Ask us on WhatsApp
              </a>{" "}
              — we usually reply within a few minutes during opening hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqComponents;
