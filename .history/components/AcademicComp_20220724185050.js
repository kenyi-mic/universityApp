import { StyleSheet, Text, View } from "react-native";
import { academicData } from "../data/Data";
import React from "react";

const AcademicComp = () => {
  return (
    <View>
      {academicData.map((item) => (
        <View key={item.id}></View>
      ))}
    </View>
  );
};

export default AcademicComp;

const styles = StyleSheet.create({});
