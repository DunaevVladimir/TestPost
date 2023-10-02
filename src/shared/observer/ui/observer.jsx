import { useState, useRef, useEffect } from "react";

export function Observer({children, onObserve, onEndObserve, margin}) {

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: `${margin}px` }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      onObserve();
    } else {
      onEndObserve();
    }
  }, [isIntersecting]);

  return (
    <div className="Observer">
      {children}
      <span ref={ref}></span>
    </div>
  );
};