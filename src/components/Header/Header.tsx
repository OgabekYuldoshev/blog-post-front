import classes from "./Header.module.scss";
import { SearchInput } from "components/Inputs";
import config from "config";
import { MenuOutlined } from "@ant-design/icons";
import { Row, Col, Affix } from "antd";
import { useState } from "react";
import SideMenu from "components/SideMenu";
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Affix offsetTop={0}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Row align="middle">
            <Col className="gutter-row" span={6}>
              <SearchInput />
            </Col>
            <Col className="gutter-row" span={12}>
              <h1 className={classes.title}>{config.app.title}</h1>
            </Col>
            <Col className="gutter-row" md={6} sm={12}>
              <div className={classes.menu}>
                <Row align="middle" gutter={[24, 24]}>
                  <Col className="gutter-row" span={8}>
                    <FaTelegram className={classes.menuIcon} />
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <FaInstagram className={classes.menuIcon} />
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <FaFacebook className={classes.menuIcon} />
                  </Col>
                </Row>
                <MenuOutlined
                  onClick={() => setVisible((initial) => !initial)}
                  className={classes.menuIconMenu}
                  size={100}
                />
              </div>
              <SideMenu visible={visible} onClose={() => setVisible(false)} />
            </Col>
          </Row>
        </div>
      </div>

      <div className={classes.mobile}>
        <div className={classes.content}>
          <h1 className={classes.title}>{config.app.title}</h1>
          <div className={classes.menu}>
            <Row align="middle" gutter={[24, 24]}>
              <Col className="gutter-row" span={8}>
                <FaTelegram className={classes.menuIcon} />
              </Col>
              <Col className="gutter-row" span={8}>
                <FaInstagram className={classes.menuIcon} />
              </Col>
              <Col className="gutter-row" span={8}>
                <FaFacebook className={classes.menuIcon} />
              </Col>
            </Row>
            <MenuOutlined
              onClick={() => setVisible((initial) => !initial)}
              className={classes.menuIconMenu}
              size={100}
            />
          </div>
          <SearchInput />
        </div>
      </div>
    </Affix>
  );
};

export default Header;
