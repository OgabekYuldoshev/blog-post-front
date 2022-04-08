import React from "react";
import Swiper from "components/Swiper";
import data from "data";
import Card from "components/Card";

const Popular: React.FC = () => {
  return (
    <Swiper
      view={2}
      swipes={data.map((item, key) => (
        <Card key={key} item={item} />
      ))}
    />
  );
};

export default Popular;
