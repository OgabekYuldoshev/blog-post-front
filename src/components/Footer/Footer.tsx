import { MailOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.containerWrapper}>
        <h2 className={classes.containerTitle}>Subscribe to newsletter</h2>
        <div className={classes.containerContent}>
          <Input
            placeholder="Email"
            type="email"
            size="large"
            prefix={<MailOutlined />}
          />
          <Button type="primary" size="large">
            Subscribe
          </Button>
        </div>
      </div>
      <div className={classes.footer}>Copyright ©2022 All rights reserved</div>
    </footer>
  );
};

export default Footer;
