import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { academicData } from "../data/Data";
import React from "react";

const { height, width } = Dimensions.get("window");

const AcademicComp = () => {
  return (
    <View style={styles.container}>
      {academicData.map((item) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={item.id}
          className=" justify-center items-center my-12 "
        >
          <Image
            style={styles.image}
            source={{ width: 80, height: 80, uri: item.image }}
          />
          <View className="border-2 border-gray-300 rounded-lg py-8 px-2 bg-gray-300">
            <Text className="text-lg font-extrabold text-gray-400 text-center">
              {item.title}
            </Text>
            <Text className="text-xs text-center">{item.description}</Text>
            <Text className="text-xs text-center my-2">View full</Text>
          </View>
        </TouchableOpacity>
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
    top: -40,
    zIndex: 1,
    borderColor: "#bcbfc1",
    borderWidth: 2,
  },
});
