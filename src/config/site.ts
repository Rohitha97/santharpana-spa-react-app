/**
 * Single source of truth for Santharpana's public contact details.
 *
 * The address, email, phone and social links used to be copy-pasted across the
 * navbar, footer, contact cards and service pages, so changing one meant hunting
 * through half a dozen files. Update them here instead.
 */

const PHONE_E164 = "+94762436139";
const MAPS_QUERY = "Santharpana Ayurveda Ashram, T.B. Thennakoon Mawatha, Sigiriya";

export const site = {
  name: "Santharpana Ayurveda Ashram",
  shortName: "Santharpana Spa",
  url: "https://www.santharpanaspa.com",

  email: "santharpanaspa@gmail.com",
  get mailto() {
    return `mailto:${this.email}`;
  },

  phone: {
    /** Machine-readable form, used for tel: and wa.me links */
    e164: PHONE_E164,
    display: "+94 76 243 6139",
    tel: `tel:${PHONE_E164}`,
    whatsapp: `https://wa.me/${PHONE_E164}`,
  },

  address: {
    street: "T.B. Thennakoon Mawatha",
    city: "Sigiriya",
    region: "Central Province",
    country: "Sri Lanka",
    /** Compact form for the desktop top bar */
    short: "T.B. Thennakoon Mawatha, Sigiriya",
    /** Full form for contact cards and structured data */
    full: "T.B. Thennakoon Mawatha, Sigiriya, Sri Lanka",
  },

  hours: {
    days: "Mon – Sunday",
    time: "09:00 – 21:00",
  },

  maps: {
    /** Opens the listing in the visitor's Maps app */
    link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`,
    /** Keyless embed for the footer iframe — no API key or billing required */
    embed: `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`,
  },

  social: {
    facebook: "https://www.facebook.com/Santharpana-Ayurvedic-Garden-Spa-100482329280363/",
    instagram: "https://www.instagram.com/santharpanaspa/",
    tripadvisor:
      "https://www.tripadvisor.com/Attraction_Review-g304141-d23948259-Reviews-Santharpana_Ayurvedic_Garden-Sigiriya_Central_Province.html",
  },
} as const;

/** Attributes every off-site link needs: opens a new tab without leaking the opener. */
export const externalLink = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
