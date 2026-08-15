import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Resets scroll position on navigation.
 *
 * This used to be an `onClick={() => window.scrollTo(0, 0)}` repeated on every
 * <Link>, which missed browser back/forward and any link that forgot it.
 * POP navigations are left alone so the browser can restore the previous
 * scroll position when the visitor goes back.
 */
function ScrollToTop() {
  const { pathname, search } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, search, navigationType]);

  return null;
}

export default ScrollToTop;
