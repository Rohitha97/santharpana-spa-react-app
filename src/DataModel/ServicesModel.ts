/**
 * The seven treatments Santharpana actually offers.
 *
 * This list is kept identical to the WhatsApp auto-reply price list and to the
 * Services section of the Google Business Profile. When a treatment changes,
 * change it in all three places — a guest who is quoted one thing on Google and
 * another on WhatsApp stops trusting both.
 *
 * ── Prices ───────────────────────────────────────────────────────────────────
 * Prices are quoted in the WhatsApp auto-reply, never on the site, so they are
 * recorded here as a comment rather than as data. A `priceUsd` field would be
 * bundled into the JavaScript and readable by anyone who opened devtools, which
 * is not what "prices only on WhatsApp" means. Comments are stripped at build.
 *
 * Keep in sync with the WhatsApp auto-reply (last updated 15 August 2026):
 *
 *   Full Body Massage                                60 min   USD 27
 *   + Shirodhara                                    100 min   USD 44
 *   + Steam Bath                                     90 min   USD 33
 *   + Pinda Sweda                                    90 min   USD 38
 *   + Facial                                         90 min   USD 38
 *   + Shirodhara & Pinda Sweda                      120 min   USD 56
 *   + Shirodhara, Pinda Sweda, Steam Bath & Facial  140 min   USD 60
 */

interface Services {
  id: number;
  /** URL segment for /services/<slug>. Never change one after it is indexed. */
  slug: string;
  imgSrc: string;
  name: string;
  /** Shorter label for cards, where the full name wraps badly */
  cardName: string;
  durationMinutes: number;
  /** Human-readable duration shown on cards and detail pages */
  timeslot: string;
  /** ~155 characters — used as the page meta description and OG description */
  summary: string;
  description: string;
}

const servicesCard: Services[] = [
  {
    id: 1,
    slug: "ayurvedic-full-body-massage",
    imgSrc: "images/service/service-1.jpg",
    name: "Ayurvedic Full Body Massage",
    cardName: "Full Body Massage",
    durationMinutes: 60,
    timeslot: "60 Minutes",
    summary:
      "A 60-minute traditional Ayurvedic full body massage in Sigiriya, using warm herbal oils to release tension in the back, shoulders, legs and feet.",
    description:
      "Our signature treatment, and the one most guests choose after climbing Sigiriya Rock or Pidurangala. A full sixty minutes of traditional Ayurvedic massage covering your back, neck, shoulders, arms, legs and feet, performed by therapists trained in the classical Sri Lankan technique.\n\nWe work with warm herbal oil blended to the traditional recipe, or Aloe Vera cream if your skin is sensitive — tell us and we will adjust. The oil nourishes the skin and encourages circulation while the pressure releases the muscle tension that builds up over a long day of walking, driving or sitting on a plane.\n\nYour therapist will ask about sore spots before starting and check the pressure as they go. Female guests are treated by female therapists and male guests by male therapists, always in a private treatment room. Tell us if you would prefer otherwise.\n\nIf you are not sure where to start, start here. It is the foundation every other treatment on this list is built on.",
  },
  {
    id: 2,
    slug: "full-body-massage-with-shirodhara",
    imgSrc: "images/service/service-6.jpg",
    name: "Full Body Massage with Shirodhara",
    cardName: "Massage + Shirodhara",
    durationMinutes: 100,
    timeslot: "100 Minutes",
    summary:
      "A 100-minute Ayurvedic full body massage followed by Shirodhara — a steady stream of warm herbal oil poured across the forehead to quiet the mind.",
    description:
      "The full body massage followed by Shirodhara, the treatment most people picture when they think of Ayurveda: a continuous, unbroken stream of warm herbal oil poured slowly across the forehead.\n\nThe massage comes first, working through the body for a full hour so the muscles are already soft. Then you lie back and the oil begins. The steady warmth over the forehead is what does the work — it slows the breathing, quiets the running commentary in the head, and leaves most guests somewhere between awake and asleep. It is the classical Ayurvedic answer to a restless mind, and it is why so many guests say they slept properly for the first time in a week afterwards.\n\nShirodhara is particularly worth choosing if you have been travelling hard, sleeping badly, or carrying tension headaches. Come with your hair unwashed if you can — the oil stays in for the best effect, and you will want to wash it out afterwards rather than before.\n\nAllow a little time to sit quietly with a herbal tea when it finishes. Standing straight up and walking out undoes half the benefit.",
  },
  {
    id: 3,
    slug: "full-body-massage-with-steam-bath",
    imgSrc: "images/service/service-4.jpg",
    name: "Full Body Massage with Steam Bath",
    cardName: "Massage + Steam Bath",
    durationMinutes: 90,
    timeslot: "90 Minutes",
    summary:
      "A 90-minute Ayurvedic full body massage followed by a traditional herbal steam bath that opens the pores and carries the oils deeper into the muscles.",
    description:
      "The full body massage followed by our traditional herbal steam bath — the classical pairing, and the one to choose if your legs are aching.\n\nThe order matters. The massage works the herbal oils into the muscles first; the steam then opens the pores and lets the warmth carry those oils deeper, which is why the combination relieves stiffness far better than either does alone. The steam chamber is infused with herbs from our own garden, and you sit in it long enough to sweat properly.\n\nThis is the treatment we most often recommend to guests who have just come down off Sigiriya Rock or Pidurangala. Twelve hundred steps punishes the calves and thighs, and the heat reaches the deep muscle in a way that hands cannot.\n\nThe steam bath also does the ordinary useful things — cleanses the skin, clears the sinuses, and leaves you genuinely tired in the good way. Drink plenty of water afterwards, and plan a slow evening.",
  },
  {
    id: 4,
    slug: "full-body-massage-with-pinda-sweda",
    imgSrc: "images/service/service-7.jpg",
    name: "Full Body Massage with Pinda Sweda",
    cardName: "Massage + Pinda Sweda",
    durationMinutes: 90,
    timeslot: "90 Minutes",
    summary:
      "A 90-minute Ayurvedic full body massage with Pinda Sweda — warm herbal poultices pressed into the muscles to ease deep stiffness and old aches.",
    description:
      "The full body massage followed by Pinda Sweda, in which hand-tied cloth bundles filled with herbs are warmed and pressed rhythmically over the body.\n\nWe make the poultices fresh: herbs and aromatic leaves gathered and tied into cloth bundles, then steamed until hot. Your therapist presses and rolls them across the shoulders, back and legs, re-warming them as they cool. The heat penetrates further than hands can, which is what makes this the right choice for stiffness that has settled in — an old shoulder, a bad back, joints that ache before rain.\n\nThe smell is part of the treatment. The steamed herbs release their oils as they are pressed, and the aroma is one of the things guests remember most clearly afterwards.\n\nChoose this over the steam bath if your problem is a specific stubborn area rather than general fatigue. Choose the steam bath if you simply want the heat everywhere at once.",
  },
  {
    id: 5,
    slug: "full-body-massage-with-facial",
    imgSrc: "images/service/facial.jpg",
    name: "Full Body Massage with Facial",
    cardName: "Massage + Facial",
    durationMinutes: 90,
    timeslot: "90 Minutes",
    summary:
      "A 90-minute Ayurvedic full body massage finished with a herbal facial — cleansing, gentle massage and a fresh herbal pack for sun-tired skin.",
    description:
      "The full body massage finished with a traditional Ayurvedic facial, using herbs and preparations made in-house rather than bought in a bottle.\n\nAfter the hour of massage, the facial begins with a gentle cleanse, then a facial massage that works along the jaw, temples and forehead — the places that hold tension without your noticing. It finishes with a fresh herbal pack left on the skin while you rest.\n\nThis is the treatment to choose after a few days in the Sri Lankan sun. Dust, heat and long hours in a vehicle are hard on the face, and the cooling herbal pack settles skin that has had too much of all three. It is also the most popular choice among guests who want to feel presentable again before moving on to their next stop.\n\nTell your therapist if your skin is sensitive or reacts to anything in particular, and they will adjust the preparation.",
  },
  {
    id: 6,
    slug: "full-body-massage-with-shirodhara-and-pinda-sweda",
    imgSrc: "images/service/service-2.jpg",
    name: "Full Body Massage with Shirodhara & Pinda Sweda",
    cardName: "Massage + Shirodhara + Pinda",
    durationMinutes: 120,
    timeslot: "120 Minutes",
    summary:
      "Two hours of Ayurvedic treatment in Sigiriya: full body massage, warm herbal poultices for deep stiffness, then Shirodhara to settle the mind.",
    description:
      "Two full hours, and the point at which a massage becomes a proper Ayurvedic treatment session rather than an hour of relief.\n\nIt runs in the classical order. The full body massage opens the treatment and softens the muscle. Pinda Sweda follows, with warm herbal poultices pressed into the areas that need more heat than hands can give. Shirodhara closes it, the steady stream of warm oil across the forehead settling everything the first two treatments have loosened.\n\nBody first, then the deep stiffness, then the mind. Each stage prepares the next, which is why the sequence is worth more than the sum of its parts, and why we recommend it to guests who have a full evening rather than a spare hour.\n\nCome unhurried. Two hours passes quickly here, but the treatment does not reward being rushed at either end.",
  },
  {
    id: 7,
    slug: "complete-ayurvedic-treatment-package",
    imgSrc: "images/service/all.webp",
    name: "Full Body Massage with Shirodhara, Pinda Sweda, Steam Bath & Facial",
    cardName: "Complete Package",
    durationMinutes: 140,
    timeslot: "140 Minutes",
    summary:
      "Our complete 140-minute Ayurvedic package in Sigiriya: full body massage, Pinda Sweda, herbal steam bath, Shirodhara and a herbal facial.",
    description:
      "Everything we offer, in one unbroken session of just over two hours. This is the treatment guests book when Sigiriya is the resting point of a long trip rather than a stop along it.\n\nThe sequence is deliberate. The full body massage works the herbal oils into the muscle. Pinda Sweda follows with warm herbal poultices for the areas that hold stiffness. The steam bath then opens the pores and carries the oils deeper — this is the stage that finally releases tired legs after the rock. Shirodhara comes next, the warm oil across the forehead quieting the mind once the body has let go. The herbal facial closes the session, cooling skin that has had a long day of sun.\n\nNothing here is rushed to fit the time. Each stage runs its proper length, which is why the package takes 140 minutes rather than the sum of a shortened list.\n\nIt is also the best value of anything we offer. Book it a little in advance if you can — we only run a few of these a day, and evening slots go first.",
  },
];

/** Lookup used by the /services/<slug> route. */
const serviceBySlug = (slug: string | undefined) =>
  slug ? servicesCard.find((s) => s.slug === slug) : undefined;

/** Lookup for legacy /description?id=N links, which now redirect to the slug URL. */
const serviceById = (id: string | null) =>
  id ? servicesCard.find((s) => String(s.id) === id) : undefined;

export { servicesCard, serviceBySlug, serviceById, type Services };
