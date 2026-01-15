import { useEffect, useRef } from "react";

export default function RevealOnScroll({ children }) {
  const revealRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealRef.current.classList.add("active");
          observer.unobserve(entry.target); // reveal once
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (revealRef.current) {
      observer.observe(revealRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={revealRef} className="reveal">
      {children}
    </div>
  );
}
