import React from "react";
import styles from "./Header.module.scss";
import { Anchor } from "antd";
import { Avatar } from "antd";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import Photo from "./photo.png";
import { ConfigProvider } from 'antd';

const items = [
  {
    key: "part-1",
    href: "#part-1",
    title: "База анкет сотрудников",
  },
  {
    key: "part-2",
    href: "#part-2",
    title: "Общая база сотрудников",
  },
  {
    key: "part-3",
    href: "#part-3",
    title: "База сотрудников",
  },
  {
    key: "part-4",
    href: "#part-4",
    title: "Календарь сотрудников",
  },
];

const Header = () => {
  return (
    <ConfigProvider theme={{
      token: {
        colorText: 'var(--color-grey-3)',
        colorPrimary: 'var(--color-grey-0)',
        padding: 39
      }
      
    }}>
    <div className={styles.header}>
      <div className={styles.arrows}>
        <button className={styles.arrow}>
          <CaretLeftFilled className={styles.leftArrow} />
        </button>
        <button className={styles.arrow}>
          <CaretRightFilled className={styles.rightArrow} />
        </button>
      </div>
      <Anchor
        className={styles.anchor}
        direction="horizontal"
        items={items}
        style={{ marginRight: 80 }}
      ></Anchor>
      <div className={styles.user}>
        <div className={styles.currentUser}>
          <Avatar
            src={Photo}
            style={{ width: 56, height: 56, marginRight: 23 }}
          />
          <div className={styles.text}>
            <span className={styles.name}>Kristina 🐰</span>
            <p className={styles.occupation}>менеджер продаж</p>
          </div>
        </div>
      </div>
    </div>
    </ConfigProvider>
  );
};

export default Header;
