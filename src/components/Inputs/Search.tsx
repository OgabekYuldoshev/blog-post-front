import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Search: React.FC = () => {
  return <Input placeholder="Search..." prefix={<SearchOutlined />} />;
};

export default Search;
