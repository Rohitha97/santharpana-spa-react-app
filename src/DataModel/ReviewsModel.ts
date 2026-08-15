/**
 * Guest reviews quoted on the site.
 *
 * ── How to add one ───────────────────────────────────────────────────────────
 * Open your Google listing, find the review, and copy the text VERBATIM. Do not
 * tidy the grammar, translate it, or shorten it in a way that changes the sense —
 * quoting a real person means quoting what they actually wrote. Trimming a long
 * review to its first few sentences is fine; rewriting it is not.
 *
 * Use the reviewer's name exactly as it appears publicly on Google. If a review
 * was left in another language, either quote the original or use Google's own
 * translation and set `translatedFrom`.
 *
 * Six is plenty. Pick ones that answer a doubt a new guest would have —
 * hygiene, therapist gender, whether it is authentic, what the oils are like.
 *
 * This array starts empty on purpose: the section below it renders the verified
 * 4.7 / 186 rating and a link to Google either way, and an empty list is far
 * better than a plausible-sounding quote nobody actually wrote.
 */

export interface Review {
  /** Reviewer name as shown publicly on Google */
  name: string;
  /** Verbatim review text */
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** e.g. "March 2026" */
  date: string;
  /** Set when quoting Google's translation, e.g. "Japanese" */
  translatedFrom?: string;
  /** Optional country, shown as context: "Poland", "Japan" */
  from?: string;
}

export const reviews: Review[] = [
  {
    name: "Kinga Krogulska-Chambers",
    quote:
      "Had a wonderful spa experience with Santarpana Ayurveda Ashram.\nI booked the full Ayurvedic package and it was 3h of pure bliss. The owners are incredibly kind, they explained everything beforehand and made me feel completely at ease. Booking via WhatsApp was very easy. When I couldn't find a tuktuk after my session, they even gave me a lift back to my hotel on a motorbike! Great value and wonderful people. Thank you!",
    rating: 5,
    date: "March 2026",
    from: "UK",
  },
  {
    name: "Jade Wasa",
    quote:
      "I've had so many massages over the years, but today's experience with Rasanjali was on a completely different level. It was honestly the best massage I've ever had. I felt so relaxed and cared for that I actually fell asleep — something that never happens for me.\n\nShe looked after me so well from start to finish. You can tell she really knows her stuff. I had a full body massage, facial, and steam bath, and every part of it was done with so much skill and attention. I walked out feeling lighter, calmer, and completely refreshed.\n\nIf you're looking for someone who truly understands the body and gives you the kind of treatment that stays with you long after you leave, Rasanjali is the one.\nAbsolutely amazing",
    rating: 5,
    date: "June 2026",
  },
  {
    name: "Marco Sgrosso",
    quote:
      "An extraordinary experience. A magnificent full-body massage, great professionalism combined with so much courtesy and simplicity. After the massage, a mild gastrointestinal discomfort I had completely disappeared. At the end, a wonderful herbal infusion. Don't miss the opportunity!",
    rating: 5,
    date: "January 2026",
    translatedFrom: "Italian",
    from: "Italy",
  },
];
