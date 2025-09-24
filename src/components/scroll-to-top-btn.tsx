"use client"
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
  <button
  onClick={scrollToTop}
  className="fixed bottom-6 z-50 right-6 cursor-pointer bg-custom-gradient text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 animate-[float_3s_ease-in-out_infinite]"
>
  <ArrowUp className="w-10 h-10" />
</button>

    )
  );
}
