import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const TableComponent = ({data}) => {
  return (
    {data.map((item)=>(
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={state.tableHead} style={styles.head} Style={styles.text} />
        <Rows data={state.tableData} textStyle={styles.text} />
      </Table>
    </View>

    ))}
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});

export default TableComponent;
