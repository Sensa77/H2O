import React from "react";
import styles from "./Header.module.scss";
import { Anchor, Dropdown, Space, Typography } from "antd";
import { Avatar } from "antd";
import {
  CaretDownOutlined,
  CaretLeftFilled,
  CaretRightFilled,
} from "@ant-design/icons";
import Photo from "./photo.png";
import { ConfigProvider } from "antd";
import anchor from "../../utils/anchor";

// const DEFAULT_TAB = 2;

// const useButtonHandlers = () => {
//   let [counter, setCounter] = useState(DEFAULT_TAB);
//   console.log(counter)

//   const plusCounter = () => {
//     if (counter === 4) {
//       setCounter(1);
//       return;
//     };
//     setCounter((prev) => prev + 1);
//   }

//   const minusCounter = () => {
//     if (counter === 1) {
//       setCounter(4);
//       return;
//     };
//     setCounter((prev) => prev - 1);
//   }

//   useEffect(() => {
//     window.location.hash = `#part-${counter}`
//   }, [counter]);

//   return {
//     plusCounter, minusCounter
//   }
// }

const items = [
  {
    key: "1",
    label: "клинер",
  },
  {
    key: "2",
    label: "бригадир",
  },
  {
    key: "3",
    label: "менеджер",
  },
];

const getCurrentAnchor = (data) => {
  if (!data) return "#part-2";
  return data;
};

const tokenAnchor = {
  token: {
    colorText: "var(--color-grey-3)",
    colorPrimary: "var(--color-grey-0)",
    padding: 39,
  },
};

const tokenDropdown = {
  token: {
    colorPrimary: "#54D3C2",
  },
};

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.arrows}>
          <button className={styles.arrow} type="button">
            <CaretLeftFilled className={styles.leftArrow} />
          </button>
          <button className={styles.arrow} type="button">
            <CaretRightFilled className={styles.rightArrow} />
          </button>
        </div>
        <ConfigProvider theme={tokenAnchor}>
          <Anchor
            getCurrentAnchor={getCurrentAnchor}
            className={styles.anchor}
            direction="horizontal"
            items={anchor}
            style={{ marginRight: 80 }}
          ></Anchor>
        </ConfigProvider>
      </div>
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
          <ConfigProvider theme={tokenDropdown}>
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ["3"],
            }}
          >
            <Typography.Link>
              <Space>
              <CaretDownOutlined className={styles.iconArrow}/>
              </Space>
            </Typography.Link>
          </Dropdown>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default Header;
