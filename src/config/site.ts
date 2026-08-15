/**
 * Single source of truth for Santharpana's public contact details.
 *
 * The address, email, phone and social links used to be copy-pasted across the
 * navbar, footer, contact cards and service pages, so changing one meant hunting
 * through half a dozen files. Update them here instead.
 *
 * IMPORTANT: every value here must match the Google Business Profile exactly.
 * Google cross-checks name/address/phone across the web to confirm a business is
 * real, and mismatches weaken that confirmation. If you edit the profile, edit
 * this file in the same sitting.
 */

const PHONE_E164 = "+94762436139";
const MAPS_QUERY = "Santharpana Ayurveda Ashram, T.B. Thennakoon Mawatha, Sigiriya";

/** Google's own id for the listing, read from the Maps share URL (hex 0x93dec67d5bb03db1). */
const MAPS_CID = "10655172010116660657";

export const site = {
  name: "Santharpana Ayurveda Ashram",
  shortName: "Santharpana Spa",
  url: "https://www.santharpanaspa.com",

  email: "santharpanaspa@gmail.com",
  get mailto() {
    return `mailto:${this.email}`;
  },

  phone: {
    /** Machine-readable form, used for tel: links */
    e164: PHONE_E164,
    display: "+94 76 243 6139",
    tel: `tel:${PHONE_E164}`,
    /**
     * wa.me wants the number in full international form with no "+", no zeroes,
     * brackets or dashes. Passing the leading "+" is undocumented and silently
     * fails on some clients, which for this business means a lost booking.
     */
    whatsapp: `https://wa.me/${PHONE_E164.replace(/\D/g, "")}`,
  },

  address: {
    street: "T.B. Thennakoon Mawatha",
    city: "Sigiriya",
    region: "Central Province",
    postalCode: "21120",
    country: "Sri Lanka",
    countryCode: "LK",
    /** Compact form for the desktop top bar */
    short: "T.B. Thennakoon Mawatha, Sigiriya",
    /** Full form for contact cards and structured data */
    full: "T.B. Thennakoon Mawatha, Sigiriya 21120, Sri Lanka",
  },

  /** Read off the Google Maps listing — used for schema geo and directions. */
  geo: {
    latitude: 7.9458767,
    longitude: 80.7338095,
  },

  hours: {
    days: "Mon – Sunday",
    time: "09:00 – 21:00",
    /** 24-hour strings for schema.org openingHoursSpecification */
    opens: "09:00",
    closes: "21:00",
  },

  /**
   * Live Google review stats. These are shown as social proof on the site, so
   * refresh them when they drift — an inflated count is worse than a modest one.
   * Last checked: 15 August 2026.
   */
  reviews: {
    rating: 4.7,
    count: 186,
    checked: "2026-08-15",
  },

  maps: {
    /** Opens the listing in the visitor's Maps app */
    link: `https://maps.google.com/?cid=${MAPS_CID}`,
    /** Keyless embed for the footer iframe — no API key or billing required */
    embed: `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`,
    /** Directions straight to the door, for guests already in Sigiriya */
    directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`,
    /**
     * Where the "leave a review" buttons point. Replace this with the short link
     * from your Business Profile (Read reviews → Ask for reviews) if you get one —
     * the cid form below works today but the short link is easier to put on a card.
     */
    writeReview: `https://search.google.com/local/writereview?placeid=&cid=${MAPS_CID}`,
  },

  social: {
    facebook: "https://www.facebook.com/Santharpana-Ayurvedic-Garden-Spa-100482329280363/",
    instagram: "https://www.instagram.com/santharpanaspa/",
    tripadvisor:
      "https://www.tripadvisor.com/Attraction_Review-g304141-d23948259-Reviews-Santharpana_Ayurvedic_Garden-Sigiriya_Central_Province.html",
  },
} as const;

/**
 * Builds a wa.me link with the message already typed for the guest.
 *
 * Prices deliberately live in the WhatsApp auto-reply rather than on the site,
 * so naming the treatment here matters: the guest taps once, the auto-reply
 * comes back with the price list, and they can see the line that applies to
 * exactly what they asked about.
 */
export function whatsappLink(message?: string): string {
  if (!message) return site.phone.whatsapp;
  return `${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Attributes every off-site link needs: opens a new tab without leaking the opener. */
export const externalLink = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
