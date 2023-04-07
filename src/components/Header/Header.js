import React from "react";
import styles from "./Header.module.scss";
import { Anchor } from "antd";
import { Avatar } from "antd";
import { CaretLeftFilled, CaretRightFilled, DownOutlined } from "@ant-design/icons";
import Photo from "./photo.png";
import { Dropdown, Space, Typography } from "antd";

const item = [
  {
    key: "1",
    label: "Item 1",
  },
  {
    key: "2",
    label: "Item 2",
  },
  {
    key: "3",
    label: "Item 3",
  },
];

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
        <Dropdown
          menu={{
            item,
            selectable: true,
            defaultSelectedKeys: ["3"],
          }}
        >
          <Typography.Link>
            <Space>
              Selectable
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
