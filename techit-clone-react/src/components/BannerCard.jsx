const BannerCard = () => {
    return (
      <li className="relative h-[400px]">
        <div className="container h-full flex flex-col justify-center">
          <h3 className="text-[32px] font-bold">
            TECHIT IT 직무 부트캠프 사전알림
          </h3>
          <h5 className="text-[18px] mt-2">
            알림 소식 받고, 부트캠프 소식 놓치지 않기!
          </h5>
        </div>
        <img
          className="absolute top-0 w-full h-full object-cover -z-10"
          src="./images/banner_1.webp"
          alt="banner_1"
        />
      </li>
    );
  };
  
  export default BannerCard;