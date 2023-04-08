import React from "react";
import styles from './Main.module.scss';
import Header from "../Header/Header";
import Content from "../Content/Content";

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Content />
    </div>
  )
}

export default Main;