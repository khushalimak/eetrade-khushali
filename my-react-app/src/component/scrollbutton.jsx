import React, { useState } from "react";

const ScrollButton = () => {
  const [visiable, setVisiable] = useState(false);

  const toggleVisiable = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 250) {
      setVisiable(true);
    } else {
      setVisiable(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisiable);

  return (
    <div>
      <button
        className="bg-blue-500 text-white w-10 h-10 rounded-lg fixed bottom-12 right-12 shadow-lg z-50"
        style={{ display: visiable ? "inline" : "none" }}
        onClick={scrollToTop}
      >
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default ScrollButton;
