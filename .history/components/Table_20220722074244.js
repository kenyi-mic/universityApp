import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";

const TableCompontent = () => {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header className="">
          <DataTable.Title className=" text-xl">
            Admission Sessions
          </DataTable.Title>
          <DataTable.Title>Summer and winters</DataTable.Title>
        </DataTable.Header>
        <DataTable.Header className=" grid grid-rows-2">
          <DataTable.Title>Admission Sessions</DataTable.Title>
          <DataTable.Title>Summer and winters</DataTable.Title>
        </DataTable.Header>
        <DataTable.Header className=" grid grid-rows-2">
          <DataTable.Title>Admission Sessions</DataTable.Title>
          <DataTable.Title>Summer and winters</DataTable.Title>
        </DataTable.Header>
        <DataTable.Header className=" grid grid-rows-2">
          <DataTable.Title>Admission Sessions</DataTable.Title>
          <DataTable.Title>Summer and winters</DataTable.Title>
        </DataTable.Header>
        <DataTable.Header className=" grid grid-rows-2">
          <DataTable.Title>Admission Sessions</DataTable.Title>
          <DataTable.Title>Summer and winters</DataTable.Title>
        </DataTable.Header>
      </DataTable>
    </View>
  );
};

export default TableCompontent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});
