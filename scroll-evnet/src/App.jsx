import { useEffect, useState } from "react";

import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";
import Header from "./components/Header";

const App = () => {
  const [isHidden, setIsHidden] = useState(false);

  const scrollEvent = () => {
    if (window.scrollY > 1000) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => window.addEventListener("scroll", scrollEvent);

    watchScroll();

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <>
      <Header isHidden={isHidden} />
      <A />
      <B />
      <C />
      <D />
    </>
  );
};

export default App;
