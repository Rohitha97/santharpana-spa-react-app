import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EMAILJS_SERVICE_ID = "service_wfya6jy";
const EMAILJS_TEMPLATE_ID = "template_nntewfh";
const EMAILJS_PUBLIC_KEY = "4Dndd4knu6wytsWdR";

const fields = [
  { name: "name", label: "Your Name", type: "text", autoComplete: "name", required: true },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email", required: true },
  { name: "subject", label: "Query Topic", type: "text", autoComplete: "off", required: false },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel", required: false },
] as const;

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Guard against a second submit while the first request is still in flight,
    // which previously sent duplicate enquiries.
    if (!form.current || sending) return;

    setSending(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent! We'll get back to you shortly.");
      form.current.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
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
            <form ref={form} onSubmit={sendEmail} noValidate={false}>
              <div className="row g-3">
                {fields.map(({ name, label, type, autoComplete, required }) => (
                  <div className="col-md-6" key={name}>
                    <div className="form-group">
                      <label className="visually-hidden" htmlFor={name}>
                        {label}
                      </label>
                      <input
                        name={name}
                        id={name}
                        type={type}
                        className="form-control"
                        placeholder={required ? `${label} *` : label}
                        autoComplete={autoComplete}
                        required={required}
                        disabled={sending}
                      />
                    </div>
                  </div>
                ))}
                <div className="col-12">
                  <div className="form-group">
                    <label className="visually-hidden" htmlFor="message">
                      Your message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      placeholder="Your message… *"
                      required
                      disabled={sending}
                      style={{ minHeight: "200px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  className="btn btn-main btn-round-full"
                  type="submit"
                  disabled={sending}
                  aria-busy={sending}
                >
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
