import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const CarouselItem = () => {
  return (
    <View className={[`flex flex-1 w- h-4/5 `]}>
      <Image />
      <View>
        <Text style={styles.itemTitle}>Title</Text>
        <Text>Description</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: width - 20,
    height: height / 3,
    shadowOffset: { width: 0.5, height: 0.5 },
    elevation: 5,
  },
  image: {
    width: width - 20,
    height: height / 3,
  },
  itemTitle: {
    shadowOffset: { width: 0.8, height: 0.8 },
  },
});

export default CarouselItem;
