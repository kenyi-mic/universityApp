import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";

const CONTENT = {
  tableHead: ["Column 0/Row 0", "Column 1", "Column 2", "Column 3"],
  tableTitle: ["Row", "Row 2", "Row 3", "Row 4"],
  tableData: [
    ["1", "2", "3"],
    ["a", "b", "c"],
    ["1", "2", "3"],
    ["a", "b", "c"],
  ],
};

const TableCompontent = () => {
  return (
    <View>
      <Table Style={{ borderWidth: 1 }}>
        <Row data={CONTENT.tableHead} flexArr={[1, 2, 1, 1]} />
        <TableWrapper>
          <Col data={CONTENT.tableTitle} heightArr={[28, 28]} />
          <Rows data={CONTENT.tableData} flexArr={[2, 1, 1]} />
        </TableWrapper>
      </Table>
    </View>
  );
};

export default TableCompontent;
