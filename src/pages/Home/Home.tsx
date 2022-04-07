import React from "react";
import Layout from "layouts/Main";
import Header from "components/Header";
const Home: React.FC = () => {
  return <Layout header={<Header />}>Hello</Layout>;
};

export default Home;
