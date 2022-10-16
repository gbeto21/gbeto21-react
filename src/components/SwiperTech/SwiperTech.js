import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper/core";
import AnimationAppear from "../../animations/Appear";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./SwiperTech.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperTech = () => {
  return (
    <AnimationAppear>
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
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="item item-gh"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item item-nx"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item item-js"></div>
        </SwiperSlide>
        <SwiperSlide className="slide-nd">
          <div className="item item-nd"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item item-ex"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item item-rt"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item item-ts"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item item-aw"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item item-sl"></div>
        </SwiperSlide>
        <SwiperSlide className="slide-cs">
          <div className="item item-cs"></div>
        </SwiperSlide>
      </Swiper>
    </AnimationAppear>
  );
};

export default SwiperTech;
