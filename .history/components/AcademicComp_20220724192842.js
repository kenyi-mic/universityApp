import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { academicData } from "../data/Data";
import React from "react";

const { height, width } = Dimensions.get("window");

const AcademicComp = () => {
  return (
    <View style={styles.container}>
      {academicData.map((item) => (
        <View key={item.id} className=" justify-center items-center  ">
          <Image
            style={styles.image}
            source={{ width: 80, height: 80, uri: item.image }}
          />
          <View className="border-2 border-gray-300 rounded-lg gap-y-5 ">
            <Text className="text-lg font-extrabold text-gray-400 text-center">
              {item.title}
            </Text>
            <Text className="text-xs text-center">{item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default AcademicComp;

const styles = StyleSheet.create({
  container: {
    width: width - 20,
  },
  image: {
    borderRadius: 40,
    position: "absolute",
    top: -60,
    zIndex: 100,
    borderColor: "gray",
  },
});
