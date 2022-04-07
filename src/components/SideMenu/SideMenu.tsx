import React from "react";
import { Drawer } from "antd";

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<IProps> = ({ onClose, visible }) => {
  return (
    <Drawer title="Menu" placement="right" onClose={onClose} visible={visible}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};
export default SideMenu;
