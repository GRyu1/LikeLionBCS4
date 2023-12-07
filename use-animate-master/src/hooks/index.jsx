import { useState, useRef, useEffect } from "react";

export const useAnimate = () => {
  const [isObserve, setIsObserve] = useState(false);

  const detectedRef = useRef();
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        console.log(entries[0].isIntersecting);
        setIsObserve(entries[0].isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.current.observe(detectedRef.current);

    return () => observer.current.unobserve(detectedRef.current);
  }, []);

  return {
    detectedRef,
    isObserve,
  }; //usestate는 return을 []로 만든 거
};
