import React from "react";
import styles from "./TableSection.module.scss";
import { Table } from "antd";
import columns from "../../utils/table";
import data from "../../utils/data";

const TableSection = () => {
  return (
    <div>
      <Table
        className={styles.table}
        columns={columns}
        dataSource={data}
        bordered
        pagination={{
          position: ["bottomCenter"],
          pageSize: 8,
          showSizeChanger: true,
        }}
        size="middle"
        scroll={{
          x: "calc(700px + 50%)",
        }}
      />
    </div>
  );
};

export default TableSection;
