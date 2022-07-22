import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";

const TableCompontent = () => {
  return (
    <View style={styles.container}>
      <Text className="text-xl font-bold">Important Daate & Deadline</Text>
      <DataTable>
        <DataTable.Header className="">
          <DataTable.Title style={styles.title}>
            Admission Sessions
          </DataTable.Title>
          <DataTable.Title>Summer and winters</DataTable.Title>
        </DataTable.Header>
        <DataTable.Header className=" grid grid-rows-2">
          <DataTable.Title>Admission deadline for each session</DataTable.Title>
          <DataTable.Title>
            Summer(30 June and Winter(1-10 Jan))
          </DataTable.Title>
        </DataTable.Header>
        <DataTable.Header className=" grid grid-rows-2">
          <DataTable.Title>Class Start date</DataTable.Title>
          <DataTable.Title>
            Summer(1-10 June) and Winter(1-10 Jan)
          </DataTable.Title>
        </DataTable.Header>
        <DataTable.Header className=" grid grid-rows-2">
          <DataTable.Title>Registration Deadline</DataTable.Title>
          <DataTable.Title>Before 5 months of final Exams</DataTable.Title>
        </DataTable.Header>
        <DataTable.Header className=" grid grid-rows-2">
          <DataTable.Title>Tuition fees installments</DataTable.Title>
          <DataTable.Title>
            50% with Registration and 50% after Mid Exam
          </DataTable.Title>
        </DataTable.Header>
      </DataTable>
    </View>
  );
};

export default TableCompontent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  title: {
    color: " green",
  },
});
