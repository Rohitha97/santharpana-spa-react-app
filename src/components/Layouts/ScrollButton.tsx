import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollTriggerButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!showButton) return null;

  return (
    <div className="scroll-trigger-button">
      <button className="backtop" onClick={scrollToTop} aria-label="Scroll to top">
        <AiOutlineArrowUp size={18} />
      </button>
    </div>
  );
}

export default ScrollTriggerButton;
