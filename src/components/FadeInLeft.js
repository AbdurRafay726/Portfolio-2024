import React, { useEffect, useRef, useState } from "react";
import "./FadeInLeft.css"; // CSS for the fade-in effect

const FadeInLeft = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const hehe = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(hehe);
  }, []);

  return (
    <div className={`fadeinleft ${isVisible ? "is-visible" : ""}`} ref={domRef}>
      {children}
    </div>
  );
};

export default FadeInLeft;
