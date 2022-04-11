import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import classes from "./MainLayout.module.scss";

interface IProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Main: React.FC<IProps> = ({ children }) => (
  <main className={classes.layout}>
    <Header />
    <section className={classes.wrapper}>{children}</section>
    <Footer />
  </main>
);

export default Main;
