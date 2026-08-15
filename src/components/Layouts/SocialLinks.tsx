import { FaFacebookF, FaGoogle, FaInstagram, FaTripadvisor, FaWhatsapp } from "react-icons/fa";
import { externalLink, site } from "../../config/site";

const links = [
  { href: site.phone.whatsapp, icon: <FaWhatsapp />, label: "WhatsApp" },
  { href: site.social.facebook, icon: <FaFacebookF />, label: "Facebook" },
  { href: site.social.instagram, icon: <FaInstagram />, label: "Instagram" },
  { href: site.maps.link, icon: <FaGoogle />, label: "Google Maps" },
  { href: site.social.tripadvisor, icon: <FaTripadvisor />, label: "Tripadvisor" },
];

type Props = {
  /** "dark" sits on the footer's plum background, "light" on cream cards. */
  variant?: "dark" | "light";
  className?: string;
};

function SocialLinks({ variant = "dark", className = "" }: Props) {
  return (
    <ul className={`social-icons social-icons-${variant} list-unstyled ${className}`.trim()}>
      {links.map(({ href, icon, label }) => (
        <li key={label}>
          <a href={href} aria-label={label} title={label} {...externalLink}>
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
