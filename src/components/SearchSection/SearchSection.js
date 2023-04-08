import React from "react";
import styles from "./SearchSection.module.scss";
import { Input } from "antd";
import { Button } from "antd";

const { Search } = Input;

const SearchSection = () => {
  return (
    <div className={styles.searchSection}>
      <div className={styles.leftContent}>
        <div className={styles.contactCount}>
          <span className={styles.count}>2335</span>
          <span className={styles.label}>Контактов</span>
        </div>
        <Search placeholder="input search text" className={styles.input} />
      </div>
      <Button className={styles.button} type="primary" ghost>
        Режим редактирования
      </Button>
    </div>
  );
};

export default SearchSection;
