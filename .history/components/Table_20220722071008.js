import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const TableComponent = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item, i }) => (
        <View key={i} style={styles.container} className=" flex flex-row">
          <Text className=" mx-3">{item.header1}</Text>
          <Text>{item.header2}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});

export default TableComponent;
