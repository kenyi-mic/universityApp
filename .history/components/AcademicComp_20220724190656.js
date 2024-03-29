import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { academicData } from "../data/Data";
import React from "react";

const { height, width } = Dimensions.get("window");

const AcademicComp = () => {
  return (
    <View style={styles.container}>
      {academicData.map((item) => (
        <View key={item.id} className="flex flex-row gap-3">
          <Image source={{ width: 150, height: 200, uri: item.image }} />
          <View className="mt-2">
            <Text className="text-lg font-extrabold text-gray-400">
              {item.title}
            </Text>
            <Text className="text-xs">{item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default AcademicComp;

const styles = StyleSheet.create({
  container: {
    width: width - 10,
  },
});
