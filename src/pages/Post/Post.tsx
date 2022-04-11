import React from "react";
import Layout from "layouts/Main";
import { Avatar, Col, Row } from "antd";
import classes from "./Post.module.scss";
import data from "data";
import InlineCard from "components/InlineCard";

const Post: React.FC = () => {
  return (
    <Layout>
      <section className={classes.wrapper}>
        <div className={classes.author}>
          <Avatar size={80} src="https://joeschmoe.io/api/v1/random" />
          <h2>{data[0].author.fullname}</h2>
          <span>{data[0].createdAt}</span>
        </div>
        <h2 className={classes.title}>{data[0].title}</h2>
        <p className={classes.titleShort}>{data[0].shortTitle}</p>
        <img
          className={classes.image}
          src={data[0].image}
          alt={classes.title}
        />
        <div className={classes.content}>{data[0].content}</div>
      </section>
      <div className={classes.related}>
        <h2>Related</h2>
        <Row gutter={[24, 24]}>
          {data.map((item, index) => (
            <Col md={12} sm={24} key={index}>
              <InlineCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
  );
};

export default Post;
