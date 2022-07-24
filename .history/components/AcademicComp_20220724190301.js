import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { academicData } from "../data/Data";
import React from "react";

const { height, width } = Dimensions.get("window");

const AcademicComp = () => {
  return (
    <View>
      {academicData.map((item) => (
        <View key={item.id} className="flex flex-row">
          <Image source={{ width: 150, height: 300, uri: item.image }} />
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default AcademicComp;

const styles = StyleSheet.create({});
