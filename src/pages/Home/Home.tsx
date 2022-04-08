import React from "react";
import Layout from "layouts/Main";
import Header from "components/Header";
import MainSwiper from "containers/MainSwiper";
import classes from "./Home.module.scss";
import CardsContainer from "containers/CardsContainer";
import MostPopular from "containers/MostPopular";

const Home: React.FC = () => {
  return (
    <Layout header={<Header />}>
      <h1 className={classes.title}>Trending</h1>
      <div className={classes.swiper}>
        <MainSwiper />
      </div>
      <div className={classes.cards}>
        <CardsContainer />
      </div>
      <div className={classes.popular}>
        <h1 className={classes.title}>Most Popular</h1>
        <MostPopular />
      </div>
    </Layout>
  );
};

export default Home;
