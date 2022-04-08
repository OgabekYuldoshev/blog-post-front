import React from "react";
import { SwiperSlide, Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
interface IProps {
  swipes: React.ReactNode[];
  view?: number | "auto";
  props?: SwiperProps;
}
const SwiperCom: React.FC<IProps> = ({ swipes, view = 1, props }) => {
  return (
    <Swiper
      // install Swiper modules
      {...props}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={view}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {swipes.map((swipe, key) => (
        <SwiperSlide key={key}>{swipe}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCom;
