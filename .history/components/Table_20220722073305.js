import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";
import { admissionTableInfo } from "../data/Data";

const TableCompontent = () => {
  return (
    <FlatList
      data={admissionTableInfo}
      renderItems={({ item }) => (
        <View key={item.id} style={styles.container}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>{item.header1}</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>{item.header2}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      )}
    />
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
