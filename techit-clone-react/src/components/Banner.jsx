
import Slider from "react-slick";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div className="">
      <ul>
        <Slider arrows={false} autoplay={true} autoplaySpeed={5000}>
          <BannerCard />
          <BannerCard />
          <BannerCard />
          <BannerCard />
          <BannerCard />
        </Slider>
      </ul>
    </div>
  );
};

export default Banner;
