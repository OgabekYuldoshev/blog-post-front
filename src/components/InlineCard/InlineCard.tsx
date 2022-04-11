import classes from "./Card.module.scss";
import React from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

const InlineCard: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div className={classes.wrapper}>
      <Link className={classes.image} to={`/post/${item.id}`}>
        <img className={classes.image} src={item.image} alt="" />
      </Link>
      <div className={classes.content}>
        <div className={classes.meta}>
          <span>{item.tag.join(", ")}</span> - <span>{item.createdAt}</span>
        </div>
        <Link to={`/post/${item.id}`}>
          <h2 className={classes.title}>{item.title}</h2>
        </Link>
        <div className={classes.author}>
          <Avatar size={40} src="https://joeschmoe.io/api/v1/random" />
          <div>
            <span>{item.author.fullname}</span>
            <span>{item.author.position}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineCard;
