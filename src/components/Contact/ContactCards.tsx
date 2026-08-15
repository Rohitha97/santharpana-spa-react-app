import { MdAlternateEmail, MdLocationOn, MdSupportAgent } from "react-icons/md";
import { externalLink, site } from "../../config/site";

const cards = [
  {
    icon: <MdSupportAgent size={32} color="var(--plum)" aria-hidden="true" />,
    label: "Call Us",
    value: site.phone.display,
    href: site.phone.tel,
    external: false,
  },
  {
    icon: <MdAlternateEmail size={32} color="var(--plum)" aria-hidden="true" />,
    label: "Email Us",
    value: site.email,
    href: site.mailto,
    external: false,
  },
  {
    icon: <MdLocationOn size={32} color="var(--plum)" aria-hidden="true" />,
    label: "Our Location",
    value: site.address.full,
    href: site.maps.link,
    external: true,
  },
];

function ContactCards() {
  return (
    <section className="section contact-info pb-0">
      <div className="container">
        <div className="row g-4">
          {cards.map(({ icon, label, value, href, external }) => (
            <div className="col-lg-4 col-sm-6 col-md-6" key={label}>
              <div className="contact-block h-100">
                <div className="mb-3">{icon}</div>
                <h5>{label}</h5>
                <a href={href} {...(external ? externalLink : {})}>
                  {value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactCards;
