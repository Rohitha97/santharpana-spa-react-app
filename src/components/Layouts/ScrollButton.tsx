import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollTriggerButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-trigger-button">
      {showButton && (
        <button className="backtop" onClick={scrollToTop}>
          <AiOutlineArrowUp />
        </button>
      )}
    </div>
  );
}

export default ScrollTriggerButton;
