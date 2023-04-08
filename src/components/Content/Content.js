import React from "react";
import styles from './Content.module.scss';
import SearchSection from "../SearchSection/SearchSection";

const Content = () => {
  return (
    <div className={styles.content}>
      <span className={styles.title}><b>Общая база сотрудников</b></span>
      <SearchSection />
    </div>
  )
}

export default Content;