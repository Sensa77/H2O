import React from "react";
import styles from './Content.module.scss';
import SearchSection from "../SearchSection/SearchSection";
import TableSection from "../TableSection/TableSection";

const Content = () => {
  return (
    <div className={styles.content}>
      <span className={styles.title}><b>Общая база сотрудников</b></span>
      <SearchSection />
      <TableSection />
    </div>
  )
}

export default Content;