import React from "react";
import styles from './Main.module.scss';
import Header from "../Header/Header";

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
    </div>
  )
}

export default Main;