import { useEffect, useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { externalLink, site } from "../../config/site";
import { reviews, type Review } from "../../DataModel/ReviewsModel";
import { track } from "../../utils/analytics";
import "./ReviewsComponents.css";

/**
 * One guest review.
 *
 * Long reviews are clamped to a fixed number of lines so a 700-character review
 * does not stretch every card in the row to match it. The "read the full review"
 * link only appears when the text is genuinely cut off — measured after mount,
 * because the clamp depends on the rendered width, which the server cannot know.
 * Initial state is false on both server and client, so hydration stays clean.
 */
function ReviewCard({ review }: { review: Review }) {
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const [isClamped, setIsClamped] = useState(false);

  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;

    const measure = () => setIsClamped(el.scrollHeight > el.clientHeight + 1);
    measure();

    // The line count is fixed but the width is not, so a narrower viewport can
    // clamp a review that fitted a moment ago.
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="review-card">
      <div className="review-card-stars" role="img" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }, (_, i) => (
          <AiFillStar key={i} aria-hidden="true" />
        ))}
      </div>

      <blockquote ref={quoteRef}>{review.quote}</blockquote>

      {isClamped && (
        <a
          className="review-card-more"
          href={site.maps.link}
          onClick={() => track("review_click", { source: "review_card" })}
          {...externalLink}
        >
          Read the full review on Google →
        </a>
      )}

      <figcaption>
        <span className="review-card-name">{review.name}</span>
        <span className="review-card-meta">
          {review.from ? `${review.from} · ` : ""}
          {review.date}
          {review.translatedFrom ? ` · translated from ${review.translatedFrom}` : ""}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Social proof, which the site previously had none of.
 *
 * 186 reviews at 4.7 is the most persuasive thing Santharpana owns and it lived
 * entirely on Google, where a visitor to the site would never see it. The rating
 * is read from src/config/site.ts — keep it honest and refresh it when it moves.
 *
 * The quote grid renders only when src/DataModel/ReviewsModel.ts has entries, so
 * the section is useful from day one and gets better as real quotes are added.
 */
function ReviewsComponents() {
  const { rating, count } = site.reviews;

  return (
    <section className="section reviews-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <span className="subtitle d-block mb-3">What Guests Say</span>

            <div className="reviews-score">
              <span className="reviews-score-value">{rating}</span>
              <div className="reviews-score-stars" role="img" aria-label={`${rating} out of 5 stars`}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <AiFillStar key={i} aria-hidden="true" />
                ))}
              </div>
            </div>

            <h2 className="mt-3">
              Rated {rating} out of 5 by {count} guests
            </h2>
            <div className="divider mx-auto mt-3 mb-4"></div>

            <p className="reviews-intro">
              Travellers from Japan, Poland, Germany and across Sri Lanka have reviewed us on
              Google. Read every one of them — the good and the critical — before you book.
            </p>

            <a
              href={site.maps.link}
              className="btn btn-main btn-round-full"
              onClick={() => track("review_click", { source: "reviews_section" })}
              {...externalLink}
            >
              Read all {count} reviews on Google
            </a>
          </div>
        </div>

        {reviews.length > 0 && (
          <div className="row g-4 mt-4 justify-content-center">
            {reviews.map((review) => (
              <div className="col-md-6 col-lg-4" key={`${review.name}-${review.date}`}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ReviewsComponents;
