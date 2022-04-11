import React from "react";
import Layout from "layouts/Main";
// import { Avatar, Col, Row } from "antd";
import classes from "./Category.module.scss";
import data from "data";
import InlineCard from "components/InlineCard";
import { Col, Pagination, Row } from "antd";
// import data from "data";
// import InlineCard from "components/InlineCard";

const Category: React.FC = () => {
  return (
    <Layout>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h2>CATEGORIES</h2>
          <p>Business</p>
        </div>
        <Row gutter={[24, 24]} className={classes.content}>
          {data.map((item, index) => (
            <Col md={12} sm={24} key={index}>
              <InlineCard item={item} />
            </Col>
          ))}
        </Row>

        <div className={classes.pagination}>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </Layout>
  );
};

export default Category;
