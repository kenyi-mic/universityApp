import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";

const TableCompontent = () => {
  return (
    <View style={styles.container}>
      <DataTable.Header></DataTable.Header>
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
