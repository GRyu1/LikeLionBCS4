import { useEffect, useState } from "react";

const A = () => {
  const [size, setSize] = useState(1);

  const scrollEvent = () => {
    if (window.scrollY > 500) {
      setSize(size - 1);
    } else {
      setSize(size - window.scrollY * 0.002);
    }
  };

  useEffect(() => {
    const watchScroll = () => window.addEventListener("scroll", scrollEvent);

    watchScroll();

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <div className="max-w-screen-md mx-auto min-h-screen flex justify-end items-end text-7xl relative">
      <div
        style={{ width: 400 + 368 * size, height: 400 + 570 * size }}
        className="bg-red-100 absolute top-0 left-0"
      ></div>
      <div>Scam is Money 💵</div>
    </div>
  );
};

export default A;