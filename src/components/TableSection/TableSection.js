import React from "react";
import styles from "./TableSection.module.scss";
import { ConfigProvider, Table } from "antd";
import columns from "../../utils/table";
import data from "../../utils/data";
import moment from "moment/moment";

const TableSection = ({ text }) => {
  const addAdditionalFlag = (person, key, value) => {
    return {
      ...person,
      [key]: value,
    };
  };

  const filterPerson = data.filter((person) => {
    return person.name.toLowerCase().includes(text.toLowerCase());
  });

  const checkDate = (date) => {
    const now = moment();
    const personMoment = moment(date, "DD-MM-YYYY");
    const isAfter = personMoment.isAfter(now);
    return isAfter;
  };

  const dataWithValidityFlag = filterPerson.map((person) => {
    const personValidityPassport = addAdditionalFlag(
      person,
      "afterValidityPassport",
      checkDate(person.validityPassport)
    );
    const personValidityPatent = addAdditionalFlag(
      personValidityPassport,
      "afterValidityPatent",
      checkDate(person.validityPatent)
    );
    return personValidityPatent;
  });

  const propertiesPagination = {
    position: ["bottomCenter"],
    pageSizeOptions: [8, 10, 20],
    showSizeChanger: true,
    total: dataWithValidityFlag.length,
    defaultPageSize: 8,
    defaultCurrent: 1,
    showTotal: (total, range) =>
      `показано ${range[0]}-${range[1]} из ${total} результатов`,
  };

  const token = {
    token: {
      colorPrimary: "#54D3C2",
    },
  };

  return (
    <div className={styles.wrapper}>
      {dataWithValidityFlag.length ? (
          <ConfigProvider theme={token}>
            <Table
              className={styles.table}
              columns={columns}
              dataSource={dataWithValidityFlag}
              bordered
              pagination={propertiesPagination}
              size="middle"
              scroll={{
                x: "calc(700px + 50%)",
              }}
            />{" "}
          </ConfigProvider>
      ) : (
        <p className={styles.emptyTable}>Нету такого сотрудника</p>
      )}
    </div>
  );
};

export default TableSection;
