import React, { useEffect, useState } from "react";
import { scroll } from "framer-motion";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const updateProgress = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressValue = scrollPosition / windowHeight;

      setProgress(progressValue);
      ticking = false;
    };

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    
    const cancelScroll = scroll(() => {
      handleScroll();
    });


    return () => cancelScroll();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "8px",
        backgroundColor: "#ddd",
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress * 100}%`,
          backgroundColor: "#000000",
          transition: "width 0.1s ease-out",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
