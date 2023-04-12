import React from "react";
import styles from "./SearchSection.module.scss";
import { Button } from "antd";
import data from '../../utils/data'

const debounceLodash = require('lodash.debounce');

const SearchSection = ({setText}) => {

  const onChangeInput = (e) => {
    if (e.keyCode === 13) {
      e.keyCode = 0;
      return false;
  }
    setText(e.target.value);
  }

  const debounce = debounceLodash(onChangeInput, 1000)

  return (
    <div className={styles.searchSection}>
      <div className={styles.leftContent}>
        <div className={styles.contactCount}>
          <span className={styles.count}>{data.length}</span>
          <span className={styles.label}>Контактов</span>
        </div>
        <form className={styles.form}>
        <button type="button" className={styles.icon}/>
        <input type="text" className={styles.input} placeholder="Поиск по имени сотрудника" onChange={debounce}/>
        </form>
      </div>
      <Button className={styles.button} type="primary" ghost>
        Режим редактирования
      </Button>
    </div>
  );
};

export default SearchSection;
