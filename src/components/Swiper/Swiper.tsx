import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from "swiper";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
interface IProps {
  swipes: React.ReactNode[];
  view?: number | "auto";
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
}
const SwiperCom: React.FC<IProps> = ({ swipes, view = 1, breakpoints }) => {
  return (
    <Swiper
      // install Swiper modules
      breakpoints={breakpoints}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={view}
      spaceBetween={30}
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
