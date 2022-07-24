import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { academicData } from "../data/Data";
import React from "react";

const { height, width } = Dimensions.get("window");

const AcademicComp = () => {
  return (
    <View>
      {academicData.map((item) => (
        <View key={item.id}>
          <Image source={{ uri: item.image }} />
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
};

export default AcademicComp;

const styles = StyleSheet.create({});
