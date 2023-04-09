import React from "react";
import styles from './TableSection.module.scss';
import { Table } from 'antd';
import columns from "../../utils/table";
import data from "../../utils/data";

const TableSection = () => {
  return (
    <div>
      <Table
    columns={columns}
    dataSource={data}
    bordered
    size="middle"
    scroll={{
      x: 'calc(700px + 50%)',
      y: 594,
    }}
  />
    </div>
  )
}

export default TableSection;