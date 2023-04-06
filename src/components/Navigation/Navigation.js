import React from "react";
import styles from "./Navigation.module.scss";
import Logo from './image/Logo.svg';
import Calendar from './image/Calendar.svg';
import List from './image/List.svg';
import Box from './image/Box.svg';
import People from './image/People.svg';
import Coins from './image/Coins.svg';
import Chart from './image/Chart.svg';
import Settings from './image/Settings.svg';
import cn from 'classnames';

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <img className={styles.logo} src={Logo} alt="logo" width='64px' height='38px'/>
      <div className={styles.categories}>
      <div className={styles.category}><img className={styles.calendar} src={Calendar}/></div>
      <div className={styles.category}><img className={styles.list} src={List}/></div>
      <div className={styles.category}><img className={styles.box} src={Box}/></div>
      <div className={cn(styles.category, styles.active)}><img className={styles.people} src={People}/></div>
      <div className={styles.category}><img className={styles.coins} src={Coins}/></div>
      <div className={styles.category}><img className={styles.chart} src={Chart}/></div>
      <div className={styles.category}><img className={styles.settings} src={Settings}/></div>
      </div>
    </div>
  );
};

export default Navigation;
