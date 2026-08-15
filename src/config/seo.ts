/**
 * Per-route page metadata and structured data.
 *
 * Every route used to ship the same <title>, the same meta description and a
 * canonical pointing at the homepage, which told Google that /services, /about
 * and /contact were all duplicates of "/" and should be dropped from the index.
 * This module is the fix: one entry per URL, consumed by three places that must
 * never disagree —
 *
 *   1. scripts/prerender.mjs  — bakes these into the static HTML crawlers read
 *   2. scripts/sitemap.mjs    — lists the same URLs in sitemap.xml
 *   3. components/Seo.tsx     — keeps them correct during client-side navigation
 *
 * Titles are kept under ~60 characters so Google does not truncate them, and
 * descriptions under ~155.
 */

import { site } from "./site";
import { servicesCard } from "../DataModel/ServicesModel";

export interface PageMeta {
  /** Path with a leading slash and no trailing slash (except "/") */
  path: string;
  title: string;
  description: string;
  /** Absolute URL of the 1200x630 share image */
  image: string;
  /** Keep this URL out of the index and out of sitemap.xml */
  noindex?: boolean;
  /** sitemap.xml <priority>; omitted for noindex pages */
  priority?: number;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
}

const ogImage = (name: string) => `${site.url}/og/${name}.jpg`;

export const DEFAULT_IMAGE = ogImage("default");

/** The business itself. Referenced by @id from the page-level schema below. */
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  image: DEFAULT_IMAGE,
  logo: `${site.url}/images/logo.png`,
  email: site.email,
  telephone: site.phone.e164,
  description:
    "Government-registered Ayurvedic spa in Sigiriya, Sri Lanka, offering traditional full body massage, Shirodhara, Pinda Sweda, herbal steam bath and facial treatments.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  hasMap: site.maps.link,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: site.hours.opens,
    closes: site.hours.closes,
  },
  // A band, not a price list — actual prices are quoted in the WhatsApp reply.
  priceRange: "$$",
  currenciesAccepted: "USD, LKR",
  areaServed: ["Sigiriya", "Dambulla", "Habarana", "Kandalama", "Inamaluwa"].map((name) => ({
    "@type": "Place",
    name,
  })),
  // NOTE: deliberately no aggregateRating. Google treats self-supplied ratings on
  // your own LocalBusiness as ineligible for rich results and can issue a manual
  // action for them. The visible "4.7 from 186 reviews" on the page links to
  // Google instead, which is the sanctioned way to show it.
  sameAs: [site.social.facebook, site.social.instagram, site.social.tripadvisor],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ayurvedic Treatments",
    itemListElement: servicesCard.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${site.url}/services/${service.slug}#service`,
        name: service.name,
        url: `${site.url}/services/${service.slug}`,
      },
    })),
  },
};

/** Questions guests actually ask before booking. Mirrored by FaqComponents.tsx. */
export const faqs = [
  {
    q: "Do I need to book in advance?",
    a: "Walk-ins are welcome when we have a therapist free, but evenings fill up — especially after the rock closes. Message us on WhatsApp with your preferred time and we will confirm a slot.",
  },
  {
    q: "Will a female guest be treated by a female therapist?",
    a: "Yes. Female guests are treated by female therapists and male guests by male therapists, always in a private treatment room. Tell us in advance if you would prefer a different arrangement.",
  },
  {
    q: "What should I wear, and what happens to my clothes?",
    a: "Wear whatever is comfortable to arrive in. We provide disposable underwear and a private changing area, and your belongings stay locked in the treatment room with you.",
  },
  {
    q: "How much do treatments cost?",
    a: "Message us on WhatsApp and our reply comes back immediately with the full price list for all seven treatments. Prices are per person and include the herbal oils and welcome tea.",
  },
  {
    q: "Is Santharpana a registered Ayurvedic centre?",
    a: "Yes. We are registered with the Sri Lankan Department of Ayurveda, and our therapists are trained in the classical Sri Lankan technique. Ask at reception and we will show you the certificate.",
  },
  {
    q: "Do you offer pickup from my hotel?",
    a: "We can arrange transport from hotels and guesthouses in Sigiriya, Inamaluwa and Habarana. Mention where you are staying when you message and we will tell you what is possible.",
  },
  {
    q: "How long should I allow after climbing Sigiriya Rock?",
    a: "An hour is plenty. Most guests come straight down, drink some water and come to us — the sooner the legs are treated, the less stiffness there is the next day.",
  },
  {
    q: "Which treatment should I choose?",
    a: "If your legs ache after the climb, choose the massage with steam bath. If you are not sleeping well, choose the one with Shirodhara. If you have a full evening, the complete package is the best value.",
  },
];

const staticPages: PageMeta[] = [
  {
    path: "/",
    title: "Santharpana Ayurveda Ashram | Ayurveda & Massage in Sigiriya",
    description:
      "Government-registered Ayurvedic spa in Sigiriya. Traditional full body massage, Shirodhara, Pinda Sweda and herbal steam bath. Open daily 9am–9pm. Book on WhatsApp.",
    image: DEFAULT_IMAGE,
    priority: 1.0,
    changefreq: "monthly",
  },
  {
    path: "/services",
    title: "Ayurvedic Treatments & Massage in Sigiriya | Santharpana",
    description:
      "Seven authentic Ayurvedic treatments in Sigiriya, from a 60-minute full body massage to a 140-minute complete package with Shirodhara, steam bath and facial.",
    image: DEFAULT_IMAGE,
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/about",
    title: "About Us | Registered Ayurvedic Spa in Sigiriya",
    description:
      "A government-registered Ayurvedic spa set in a herbal garden in Sigiriya, Sri Lanka. Meet the therapists, see the treatment rooms and read what guests say.",
    image: DEFAULT_IMAGE,
    priority: 0.6,
    changefreq: "yearly",
  },
  {
    path: "/appointment",
    title: "Book an Ayurvedic Massage in Sigiriya | Santharpana",
    description:
      "Book your Ayurvedic treatment in Sigiriya. Tell us the treatment and your preferred time on WhatsApp and we will confirm your slot, with the price list by return.",
    image: DEFAULT_IMAGE,
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/contact",
    title: "Contact & Directions | Santharpana Ayurveda, Sigiriya",
    description:
      "Find us on T.B. Thennakoon Mawatha, Sigiriya, open daily 9am–9pm. Call +94 76 243 6139, message us on WhatsApp, or get directions on Google Maps.",
    image: DEFAULT_IMAGE,
    priority: 0.7,
    changefreq: "yearly",
  },
];

/** One page per treatment — these are the URLs that can rank for treatment searches. */
const servicePages: PageMeta[] = servicesCard.map((service) => ({
  path: `/services/${service.slug}`,
  title: `${service.cardName} in Sigiriya | Santharpana`,
  description: service.summary,
  image: ogImage(service.slug),
  priority: 0.8,
  changefreq: "monthly",
}));

/** Rendered as 404.html. Never linked, never in the sitemap. */
export const notFoundPage: PageMeta = {
  path: "/404",
  title: "Page Not Found | Santharpana Ayurveda Ashram",
  description: "The page you were looking for does not exist or has moved.",
  image: DEFAULT_IMAGE,
  noindex: true,
};

/**
 * URLs that used to exist and may still be linked or indexed. They get a real
 * file on disk so a static host serves something rather than a 404, and App.tsx
 * bounces the visitor to the current URL as soon as React boots.
 *
 * Written as noindex so Google drops them once it recrawls, rather than keeping
 * two URLs for the same page. Both are safe to delete once Search Console shows
 * no impressions for them.
 */
const legacyPages: PageMeta[] = [
  {
    path: "/appoinment",
    title: "Book an Ayurvedic Massage in Sigiriya | Santharpana",
    description: "This page has moved to /appointment.",
    image: DEFAULT_IMAGE,
    noindex: true,
  },
  {
    // Treatments used to live at /description?id=N. The query string is only
    // readable once React runs, so this has to redirect client-side.
    path: "/description",
    title: "Ayurvedic Treatments & Massage in Sigiriya | Santharpana",
    description: "This page has moved. Treatments now live at /services.",
    image: DEFAULT_IMAGE,
    noindex: true,
  },
];

/** Every indexable URL on the site, in sitemap order. */
export const pages: PageMeta[] = [...staticPages, ...servicePages];

/** All pages the prerenderer must write: indexable, legacy shells and the 404. */
export const prerenderPages: PageMeta[] = [...pages, ...legacyPages, notFoundPage];

/**
 * Matches a browser pathname to its metadata. Falls back to the 404 entry so a
 * client-side navigation to an unknown URL still gets a sensible title.
 */
export function resolveMeta(pathname: string): PageMeta {
  const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  return pages.find((page) => page.path === clean) ?? notFoundPage;
}

/**
 * Page-level JSON-LD. The business object is emitted on every page so any single
 * page is enough for Google to understand who we are; treatment pages add a
 * Service node and the homepage adds the FAQ.
 */
export function schemaFor(path: string): object[] {
  const graph: object[] = [businessSchema];

  if (path === "/") {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  const service = servicesCard.find((s) => `/services/${s.slug}` === path);
  if (service) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${site.url}${path}#service`,
      name: service.name,
      description: service.summary,
      url: `${site.url}${path}`,
      serviceType: "Ayurvedic treatment",
      provider: { "@id": `${site.url}/#business` },
      areaServed: { "@type": "Place", name: "Sigiriya" },
    });
  }

  if (path === "/services") {
    graph.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Ayurvedic Treatments at Santharpana",
      itemListElement: servicesCard.map((s, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: s.name,
        url: `${site.url}/services/${s.slug}`,
      })),
    });
  }

  return graph;
}
