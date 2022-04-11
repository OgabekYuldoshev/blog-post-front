import React from "react";
import Layout from "layouts/Main";
import MainSwiper from "containers/MainSwiper";
import classes from "./Home.module.scss";
import CardsContainer from "containers/CardsContainer";
import MostPopular from "containers/MostPopular";
import CategoryMain from "containers/CategoryMain";

import { Row, Col } from "antd";

const Home: React.FC = () => {
  return (
    <Layout>
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
      <Row gutter={[24, 24]} className={classes.popular}>
        <Col md={12} sm={24}>
          <CategoryMain />
        </Col>
        <Col md={12} sm={24}>
          <CategoryMain />
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
