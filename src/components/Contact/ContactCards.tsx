import { MdAlternateEmail, MdSupportAgent, MdWrongLocation } from "react-icons/md";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: <MdSupportAgent size={32} color="var(--plum)" />,
    label: "Call Us",
    value: "+94 76 243 6139",
    href: "tel:+94762436139",
  },
  {
    icon: <MdAlternateEmail size={32} color="var(--plum)" />,
    label: "Email Us",
    value: "gaminianilkumara@gmail.com",
    href: "mailto:gaminianilkumara@gmail.com",
  },
  {
    icon: <MdWrongLocation size={32} color="var(--plum)" />,
    label: "Our Location",
    value: "No.43, Rotaryagama, Inamaluwa, Sigiriya, Sri Lanka",
    href: "https://goo.gl/maps/AmRn53RPKU83NJRr9",
  },
];

function contactCards() {
  return (
    <>
      <section className="section contact-info pb-0">
        <div className="container">
          <div className="row g-4">
            {cards.map(({ icon, label, value, href }) => (
              <div className="col-lg-4 col-sm-6 col-md-6" key={label}>
                <div className="contact-block h-100">
                  <div className="mb-3">{icon}</div>
                  <h5>{label}</h5>
                  <Link to={href}>{value}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default contactCards;
