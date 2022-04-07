import React from "react";
import classes from "./MainLayout.module.scss";

interface IProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Main: React.FC<IProps> = ({ children, header, footer }) => (
  <main className={classes.layout}>
    {header}
    <section className={classes.wrapper}>{children}</section>
    {footer}
  </main>
);

export default Main;
