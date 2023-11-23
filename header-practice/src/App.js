import { useEffect } from "react";


import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import Side from "./components/Side";
import PositionRecomend from "./components/PositionRecomend";
import PositionCard from "./components/PositionCard";
import Footer from "./components/Footer";

const App = () => {
  const scrollEvent = () => {
    console.log("scroll event");
  };

  useEffect(() => {
    const watchScroll = () => window.addEventListener("scroll", scrollEvent);

    watchScroll();

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <>
      <Header />
      <MainBanner/>
      <Side/>
      <PositionRecomend/>
      <PositionCard/>
      <Footer/>
    </>
  );
};

export default App;