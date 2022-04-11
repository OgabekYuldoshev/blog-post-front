import React from "react";
import classes from "./CategoryMain.module.scss";
import data from "data";
import InlineCard from "components/InlineCard";

const MainSwiper: React.FC = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.containerTitle}>Business</h2>
      <div className={classes.containerCards}>
        {data.map((item, key) => (
          <InlineCard key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MainSwiper;
