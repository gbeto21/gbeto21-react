import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./SwiperTech.css";

SwiperCore.use([Pagination]);

const SwiperTech = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 6,
        slideShadows: true,
      }}
      pagination={true}
    >
      <SwiperSlide>
        <div className="item-1 item"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item-1 item"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item-1 item"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item-1 item"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperTech;
