import React, { useState } from "react";
import styles from './Content.module.scss';
import SearchSection from "../SearchSection/SearchSection";
import TableSection from "../TableSection/TableSection";

const Content = () => {
  const [text, setText] = useState('');

  console.log(text)

  return (
    <div className={styles.content}>
      <span className={styles.title}>Общая база сотрудников</span>
      <SearchSection setText={setText} />
      <TableSection text={text} />
    </div>
  )
}

export default Content;