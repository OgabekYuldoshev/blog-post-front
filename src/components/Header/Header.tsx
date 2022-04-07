import classes from "./Header.module.scss";
import { SearchInput } from "components/Inputs";
import config from "config";
import { MenuOutlined } from "@ant-design/icons";
import { Row, Col, Affix } from "antd";
import { useState } from "react";
import SideMenu from "components/SideMenu";

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Affix offsetTop={0}>
      <header className={classes.wrapper}>
        <div className={classes.content}>
          <Row align="middle">
            <Col className="gutter-row" span={6}>
              <SearchInput />
            </Col>
            <Col className="gutter-row" span={12}>
              <h1 className={classes.title}>{config.app.title}</h1>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className={classes.menu}>
                <MenuOutlined
                  onClick={() => setVisible((initial) => !initial)}
                  className={classes.menuIcon}
                  size={100}
                />
              </div>
              <SideMenu visible={visible} onClose={() => setVisible(false)} />
            </Col>
          </Row>
        </div>
      </header>
    </Affix>
  );
};

export default Header;
