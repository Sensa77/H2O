import React from "react";
import styles from "./TableSection.module.scss";
import { Table } from "antd";
import columns from "../../utils/table";
import data from "../../utils/data";
import moment from "moment/moment";

const TableSection = ({text}) => {

const addAdditionalFlag = (person, key, value) => {
  return {
    ...person,
    [key]:value,
  }
}

  const filterPerson = data.filter((person) => {
    return person.name.toLowerCase().includes(text.toLowerCase())
  })

const checkDate = (date) => {
  const now = moment()
  const personMoment = moment(date, "DD-MM-YYYY");
  const isAfter = personMoment.isAfter(now);
  return isAfter
}

const dataWithValidityFlag = filterPerson.map((person) => {
  const personValidityPassport = addAdditionalFlag(person, 'afterValidityPassport', checkDate(person.validityPassport));
  const perdonValidityPatent = addAdditionalFlag(personValidityPassport, 'afterValidityPatent', checkDate(person.validityPatent))
  return perdonValidityPatent
})

  return (
    <div>
      <Table
        className={styles.table}
        columns={columns}
        dataSource={dataWithValidityFlag}
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
