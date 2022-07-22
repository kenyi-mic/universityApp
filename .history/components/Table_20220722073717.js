import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";

const TableCompontent = () => {
  return (
    <View key={item.id} style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Admission Sessions</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Summer and winters</DataTable.Cell>
        </DataTable.Row>
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
