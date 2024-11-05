import React from "react";
import bannerImage from "../assets/banner-images/banner3.jpg";
const Banner = () => {
  return (
    <div className="w-full h-[300px] lg:h-[600px] overflow-hidden ">
      <img
        src={bannerImage}
        alt="banner"
        loading="lazy"
        className="w-[100%] h-auto object-contain"
      />
    </div>
  );
};

export default Banner;
