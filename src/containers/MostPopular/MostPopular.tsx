import React from "react";
import Swiper from "components/Swiper";
import data from "data";
import Card from "components/Card";

const Popular: React.FC = () => {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      swipes={data.map((item, key) => (
        <Card key={key} item={item} />
      ))}
    />
  );
};

export default Popular;
